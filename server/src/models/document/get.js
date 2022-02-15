const connection = require('../connection');

module.exports = async () => {
  const result = await (await connection()).collection('list').find().toArray();
  return result;
};
