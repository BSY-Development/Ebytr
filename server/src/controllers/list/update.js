const service = require('../../services/list/update');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.updateTask(id, req.body);
    return res.status(200).send({ message: 'Updated' });
  } catch (err) {
    next(err);
  }
};
