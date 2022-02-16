const http = require('./app');

const PORT = 3001;

http.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
