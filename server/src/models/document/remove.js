const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const result = await (await connection.conn()).collection('list').findOneAndDelete(
    {
      _id: ObjectId(id),
    },
  );
  return result;
};
