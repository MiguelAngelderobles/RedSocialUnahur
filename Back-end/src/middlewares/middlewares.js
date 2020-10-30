const middlewareApp = async (app,express) => {
  const morgan = require('morgan')
  app.use(morgan('dev'))
  app.use(express.json());//revisar

};

module.exports = middlewareApp;
