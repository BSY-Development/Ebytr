const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id, { title, status }) => {
  const result = await (await connection()).collection('list').updateOne(
    {
      _id: ObjectId(id),
    },
    { $set: { title, status } },
  );
  return result;
};
