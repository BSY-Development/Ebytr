const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/ToDoList';
const DB_NAME = 'ToDoList';

let connection = null;

module.exports = async () => {
  try {
    if (connection) return connection;

    connection = (await MongoClient.connect(
        MONGO_DB_URL,
        {
          useNewUrlParser: true,
        },
      )).db(DB_NAME);
    return connection;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
