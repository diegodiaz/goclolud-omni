const express = require('express');
const path = require('path');
const app = express();


// Settings
app.set('port', process.env.PORT || 5000);

// Middleware
app.use(express.json());

// Statics
app.use(express.static(path.join(__dirname,'../public')));

// Routes
app.use('/api', require('./routes/api'));

// Server
app.listen(app.get('port'), () => {
  console.log(`Servidor iniciado en el puerto: ${app.get('port')}`);
});
