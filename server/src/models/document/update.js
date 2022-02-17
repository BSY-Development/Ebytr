const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id, { title, status }) => {
  await (await connection.conn()).collection('list').findOneAndUpdate(
    {
      _id: ObjectId(id),
    },
    { $set: { title, status } },
  );
  return { _id: id, title, status };
};
