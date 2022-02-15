const app = require('./app');
const error = require('../middleware/error');

const PORT = 3001;

app.use(error);
app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
