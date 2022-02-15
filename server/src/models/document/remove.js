const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const result = await (await connection()).collection('list').deleteOne(
    {
      _id: ObjectId(id),
    },
  );
  return result;
};
