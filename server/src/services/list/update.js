const updateContent = require('../../models/document/update');

const updateTask = async (id, content) => {
  await updateContent(id, content);
};

module.exports = {
  updateTask,
};
