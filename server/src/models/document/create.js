const connection = require('../connection');

module.exports = async (document) => {
  const result = await (await connection()).collection('list').insertOne(document);
  return result;
};
