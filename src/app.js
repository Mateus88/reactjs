const express = require('express')
const app = express();
app.set("port", process.env.PORT || 3001);
const cors = require('cors');


// Configurar CORS
//app.use(express.json())
app.use(express.static('client/build'));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
    });
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.json({ type: 'application/vnd.api+json' }));
    app.use(cors());
   
    
    
const routes = require('./routes/main.route.js')

app.use('/bd', routes)



//Rotas

app.listen(app.get('port'), ()=>{

    console.log("Comecou no port:"+app.get('port'))

})   

module.exports = app;



