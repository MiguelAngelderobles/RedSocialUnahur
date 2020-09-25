$(function () {

    // conexión del lado del cliente
    const socket = io.connect(); //mantiene la conexion en tiempo real con el servidor

     // obteniendo elementos DOM de la interfaz chat grupos
    const $messageForm1 = $('#message-form1');
    const $messageBox1 = $('#message1');
    const $chat1 = $('#chat1');

    // obtener elementos del DOM por parte del usuario
    const $nickForm = $('#nickForm');
    const $nickError = $('#nickError');
    const $nickname = $('#nickname');

    

    //----------->

   // obtener el contenedor de usuarios Para grupos
   const $users = $('#usernames');

   $nickForm.submit(e => {
     e.preventDefault();
     socket.emit('new user', $nickname.val(), data1 => {
       if(data1) {
         $('#nickWrap').hide();
         $('#contentWrap').show();
         $('#message1').focus();
       } else {
         $nickError.html(`
           <div class="alert alert-danger">
             El usuario ya existe.
           </div>
         `);
       }
     });
     $nickname.val('');
   });



    //<---------------
//--------------->

 // eventos para grupos
 $messageForm1.submit( e => {
  e.preventDefault();
  socket.emit('send message', $messageBox1.val(), data1 => {
    $chat1.append(`<p class="error">${data1}</p>`)
  });
  $messageBox1.val('');
});

socket.on('new message', data1 => {
  displayMsg(data1);
});

socket.on('usernames', data1 => {
  let html = '';
  for(i = 0; i < data1.length; i++) {
    html += `<p><i class="fas fa-user"></i> ${data1[i]}</p>`; 
  }
  $users.html(html);
});

socket.on('whisper', data1 => {
  $chat1.append(`<p class="whisper"><b>${data1.nick}</b>: ${data1.msg}</p>`);
});

socket.on('load old msgs', msgs => {
  for(let i = msgs.length -1; i >=0 ; i--) {
    displayMsg(msgs[i]);
  }
});

function displayMsg(data1) {
  $chat1.append(`<p class="msg"><b>${data1.nick}</b>: ${data1.msg}</p>`);
}

});



//<---------------