module.exports = function (io) {

    let users = {};

    io.on('connection', socket => {

        if(socket.request.user){
            let userName = socket.request.user.email;
            socket.nickname = userName;

            users[socket.nickname] = socket;

            updateNickNames();

        };

        socket.on('send message', function (data, cb){

            var msg = data.trim();

            if (msg.substr(0, 3) === '/w '){
                msg = msg.substr(3);
                const index = msg.indexOf(' ');
                if (index !== -1) {
                    var name = msg.substring(0, index);
                    var msg = msg.substring(index + 1);
                    if (name in users) {
                        users[name].emit('whisper', {
                            msg,
                            nick: socket.nickname
                        });         
                    } else {
                        cb('Error! Please enter a valid user');
                    }               
                } else {
                    cb('Error! Pease enter your message');
                }
            } else {
                io.sockets.emit('new message', {nick: socket.nickname, msg: data});
            }   
        });

        socket.on('disconnect', data =>{
            if(!socket.nickname) return;
            delete users[socket.nickname];
            updateNickNames();

        });

        function updateNickNames() {
            io.sockets.emit('usernames', Object.keys(users));
            
        }
    });
    
}