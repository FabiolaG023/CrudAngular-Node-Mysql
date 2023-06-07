const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

app.use(express.json());

// importar las rutas que contienen los controles
const rutasRoutes = require('./routes/rutas');

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'solicitudes'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//  solo una ruta
app.use('/api', rutasRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
 app.listen(app.get('port'), () => {
  console.log(`Servidor conectado por el puerto: ${app.get('port')}`);
}); 

/* app.listen(3000, () => {
  console.log("Server started in port 3000!");
}); */
