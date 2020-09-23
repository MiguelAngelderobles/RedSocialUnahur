const express = require('express')
const app = express('')

require('./database/database');
require('./passport/local-auth');
require('./middlewares/middlewares')
require('./configurations/config')

app.use('/', require('./routes/indexPrueba'));
app.use('/', require('./routes/perfil'));
app.use('/', require('./routes/grupo'));

