const configurApp = async (app) => {
    const http = require('http') 
    const { Server } = require("socket.io");
    const server = http.createServer(app)
    const io = new Server(server);

    app.set('port',process.env.PORT || 8000)
    app.listen(app.get('port'),()=>
    {console.log(`Server connect port ${app.get('port')}`)})

}

module.exports = configurApp;
