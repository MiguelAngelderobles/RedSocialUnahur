const configurApp =  async (app) => {
    const path = require('path')
    const engine = require('ejs-mate');
    const http = require('html')
    
    app.set('views',path.join(__dirname,'../views'));
    app.engine('ejs', engine);
    app.set('view engine','ejs')
    app.engine('html', require('ejs').renderFile);
   
    app.set('port',process.env.PORT || 3000)
    app.listen(app.get('port'),()=>
    {console.log(`Server connect port ${app.get('port')}`)})

}

module.exports = configurApp; 
//,path.join(__dirname,'../src/views'))
