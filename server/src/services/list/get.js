const getContent = require('../../models/document/get');

const getTasks = async () => {
  const result = await getContent();
  return result;
};

module.exports = {
  getTasks,
};
