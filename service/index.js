const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const express = require('express');
const app = express();
const DB = require('./database.js');
const authCookieName = 'token';

// let users = [];
// // let galleryPalettes = [];
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
            await DB.updateUser(user);
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
        DB.updateUser(user);
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
        res.status(401).send({ msg: 'Unauthorized here'});
    }
};

apiRouter.get('/palettes/:paletteLocation', verifyAuth, async (_req, res) =>{
    const user = await findUser('token', _req.cookies[authCookieName]);
    if (_req.params.paletteLocation === 'galleryPalettes') {
        res.send(user.galleryPalettes);
    }
    else if (_req.params.paletteLocation === 'inspirePalettes') {
        res.send(inspirePalettes);
    }
});

apiRouter.post('/palette/:paletteLocation', verifyAuth, async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    const paletteLocation = await updatePalettes(req.body, req.params.paletteLocation, user);
    res.send(paletteLocation);
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
        galleryPalettes: [],
    };
    await DB.addUser(user);

    return user;
  }

// async function findUser(field, value) {
//     if (!value) {
//         return null;
//     } 
//     else {
//         return users.find((users) => users[field] === value);
//     }
// }

async function findUser(field, value) {
    if (!value) return null;
  
    if (field === 'token') {
      return DB.getUserByToken(value);
    }
    return DB.getUser(value);
  }

async function updatePalettes(newPalette, paletteLocation, user) {
    if (paletteLocation === 'galleryPalettes') {
        user.galleryPalettes.unshift(newPalette);
        DB.updateUser(user);
        return user.galleryPalettes;
    } else if (paletteLocation === 'inspirePalettes') {
        inspirePalettes.unshift(newPalette);
        return inspirePalettes;
    }
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