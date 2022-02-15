const service = require('../../services/list/create');

module.exports = async (req, res, next) => {
  try {
    const message = await service.createTask(req.body);
    return res.status(201).send(message);
  } catch (err) {
    next(err); 
  }
};
