const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const express = require('express');
const app = express();
const authCookieName = 'token';

let users = [];
let galleryPalettes = [];
let inspirePalettes = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
    }
    else {
        const user = await createUser(req.body.email, req.body.password);
        setAuthCookie(res, user.token);
        res.send({ email: user.email});
    }
});

apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('email', req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({ email: user.email});
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', async (req, res) =>{
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    }
    else {
        res.status(401).send({ msg: 'Unauthorized'});
    }
};

apiRouter.get('/palettes/gallery', (_req, res) =>{
    res.send(galleryPalettes);
});

apiRouter.post('/palette/gallery', verifyAuth, (req, res) => {
    galleryPalettes = updatePalettes(req.body, galleryPalettes);
    res.send(galleryPalettes);
});

apiRouter.get('/palettes/inspire', (_req, res) => {
    res.send(inspirePalettes);
});

apiRouter.post('/palette/inspire', verifyAuth, (req, res) => {
    inspirePalettes = updatePalettes(req.body, inspirePalettes);
    res.send(inspirePalettes);
});

app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
  });
  
  app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

  async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    users.push(user);
    return user;
  }

async function findUser(field, value) {
    if (!value) return null;

    return users.find((users) => users[field === value]);
}

function updatePalettes(newPalette, table){
    table.unshift(newPalette);
    return table;
}

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict'
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});