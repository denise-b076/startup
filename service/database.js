const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('users');
const inspireCollection = db.collection('inspire');

(async function testConnection() {
    try {
      await db.command({ ping: 1 });
      console.log(`Connect to database`);
    } catch (ex) {
      console.log(`Unable to connect to database with ${url} because ${ex.message}`);
      process.exit(1);
    }
  })();

function getUser(email) {
    return userCollection.findOne({ email: email });

}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function addUser(user) {
    await userCollection.insertOne(user);
}

async function updateUser(user) {
    await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addInspirePalette(palette) {
    return inspireCollection.insertOne(palette);
}

function getRecentInspire() {
    const query = {};
    const options = {
        sort: { sortingDate: -1 },
        limit: 12,
    };
    const cursor = inspireCollection.find(query, options);
    return cursor.toArray();
}

module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
}