const configurApp = async (app) => {
    const path = require('path')
    const engine = require('ejs-mate');
    
    app.set('port',process.env.PORT || 3000)
    app.listen(app.get('port'),()=>
    {console.log(`Server connect port ${app.get('port')}`)})
    app.set('/src/views')
    app.engine('ejs', engine);
    app.set('view engine','ejs')
}

module.exports = configurApp; 
//,path.join(__dirname,'../src/views'))
