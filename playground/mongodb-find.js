const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log('todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log(err);
    // });

    db.collection('Todos').find({completed: false}).count().then((count) => {
        console.log(`count: ${count}`);
    });

    db.close();
});