const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server');

    db.collection('Todos').insertOne({
        text: 'eat lunch',
        completed: false
    }, (err, result) => {
        if(err) return console.log(err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});