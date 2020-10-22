const socketUp = require('../socket/socket')

const configurApp = async (app) => {
    const http = require('http') 
    const socketio = require('socket.io')
    const socketUp = require('../socket/socket')

    app.set('port',process.env.PORT || 7000)
    app.listen(app.get('port'),()=>
    {console.log(`Server connect port ${app.get('port')}`)})

    const server = http.createServer(app)
    const io = socketio.listen(server)
    socketUp(io)

}

module.exports = configurApp;
