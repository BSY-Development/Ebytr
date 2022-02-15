const createContent = require('../../models/document/create');

const createTask = async (content) => {
  await createContent(content);
  return { message: 'Item created' };
};

module.exports = {
  createTask,
};