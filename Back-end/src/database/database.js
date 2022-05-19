const updatabase = async()=>{ 
  const mongoose = require('mongoose');
  const { mongodb } = require('./keys');

<<<<<<< HEAD
  mongoose.set('useFindAndModify', false);
  mongoose.set("useUnifiedTopology",true)
=======
  //mongoose.set('useFindAndModify', false);
>>>>>>> 03670397d2ba397fb1541c5646d9b60e9e85413c
  mongoose.connect(mongodb.URI, {
    useNewUrlParser: true
  })
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));
}

module.exports = updatabase