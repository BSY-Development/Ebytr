const service = require('../../services/list/remove');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.deleteTask(id);
    return res.status(204).send({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
};
