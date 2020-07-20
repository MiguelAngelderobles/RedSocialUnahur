const express = require('express');
const app = express();

//importo routers 

//configuracion 

app.set('port',process.env.PORT || 3000)
app.set('views',path.join(__dirname,'/views'))

//cortafuegos posiblemente no uso 

app.listen(3000, ()=>{
    console.log(`Server on port ${app.get('port')}`)
})