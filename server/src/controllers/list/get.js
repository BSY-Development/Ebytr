const service = require('../../services/list/get');

module.exports = async (req, res, next) => {
  try {
    const message = await service.getTasks(req.body);
    return res.status(200).send(message);
  } catch (err) {
    next(err); 
  }
};
