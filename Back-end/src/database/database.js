const updatabase = async()=>{ 
  const mongoose = require('mongoose');
  const { mongodb } = require('./keys');

  mongoose.set('useFindAndModify', false);
  mongoose.set("useUnifiedTopology",true)
  mongoose.connect(mongodb.URI, {
    useNewUrlParser: true
  })
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));
}

module.exports = updatabase