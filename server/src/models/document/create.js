const connection = require('../connection');

module.exports = async (document) => {
  await (await connection.conn()).collection('list').insertOne(document);
  return document;
};
