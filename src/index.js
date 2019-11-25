const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// Server
app.listen(app.get('port'), () => {
  console.log(`Servidor iniciado en el puerto: ${app.get('port')}`);
});
