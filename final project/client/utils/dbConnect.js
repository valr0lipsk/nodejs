
const mongodb = require('mongodb')
const url = 'mongodb+srv://root:fns&frb975@cluster0.vu8ug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const client = new mongodb.MongoClient(url);
let database;

const connect = (callback) =>{
    client.connect()
    .then((client) => {
        database = client.db();
        console.log('It is connected');
        callback();
    })
    .catch((error) => {
        callback(error);
    })
}

const getDb = () => database

exports.connect = connect;
exports.getDb = getDb