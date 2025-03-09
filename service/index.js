const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const express = require('express');
const app = express();
const authCookieName = 'token';

let users = [];
let galleryPalettes = [];
let inspirePalettes = [];

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
    const user = {
        email: 'a.braithw8@gmail.com'
    }
    res.send({ email: user.email });
});

apiRouter.post('/auth/login', async (req, res) => {
    const user = {
        email: 'a.braithw8@gmail.com'
    }
    res.send({ email: user.email });
});

apiRouter.delete('/auth/logout', async (req, res) =>{
    res.send();
});

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

async function findUser(field, value) {
    if (!value) return null;

    return users.find((users) => users[field === value]);
}

const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    }
    else {
        res.status(401).send({ msg: 'Unauthorized'});
    }
};

function updatePalettes(newPalette, table){
    table.unshift(newPalette);
    return table;
}