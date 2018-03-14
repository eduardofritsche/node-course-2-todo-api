const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({text: "eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({text: "walk the dog"}).then((result) => {
        console.log(result);
    });

    db.close();
});