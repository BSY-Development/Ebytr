const connection = require('../connection');

module.exports = async () => {
  const result = await (await connection.conn()).collection('list').find().toArray();
  return result;
};
