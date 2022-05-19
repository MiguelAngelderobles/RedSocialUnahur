const configurApp = async (app) => {
    const http = require('http') 
    const server = http.createServer(app)

    app.set('port',process.env.PORT || 8000)
    app.listen(app.get('port'),()=>
    {console.log(`Server connect port ${app.get('port')}`)})

}

module.exports = configurApp;
