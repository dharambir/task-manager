// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectId;

// const { MongoClient, ObjectId } = require('mongodb');
import { MongoClient, ObjectId } from "mongodb";

const id = new ObjectId;

// console.log(id);
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to DB!');
    }
    const db = client.db(databaseName);
    // db.collection('users').findOne({ role: 'Developer' }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find');
    //     }
    //     console.log(user)
    // });


    // db.collection('users').find({ role: 'Developer' }).toArray((error, users) => {
    //     console.log(users);
    // });


    // db.collection('users').insertOne({
    //     name: 'Dharambir',
    //     role: 'Developer'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert")
    //     }
    //     console.log(result)
    // })

    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectId("6176542d838db4bd308c1062")
    }, {
        $set: {
            role: 'Android Developer'
        },
        $inc: {
            age: 1
        }
    });

    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error);
    })
})