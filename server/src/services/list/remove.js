const deleteContent = require('../../models/document/remove');

const deleteTask = async (id) => {
  await deleteContent(id);
};

module.exports = {
  deleteTask,
};
