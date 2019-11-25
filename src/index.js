const express = require('express');
const path = require('path');
const app = express();


// Settings
app.set('port', process.env.PORT || 5000);

// Middleware
app.use(express.json());

// Statics
app.use(express.static(path.join(__dirname,'app/public')));

// Routes
app.use('/api', require('./routes/api'));
app.get('/login', (req,res) =>{
  res.sendFile(path.join(__dirname,'app/public/index.html'));
});

// Server
app.listen(app.get('port'), () => {
  console.log(`Servidor iniciado en el puerto: ${app.get('port')}`);
});
