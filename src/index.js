const express = require('express');
const app = express();
const path = require('path');

app.set('port',3000);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs'); //motor de la vista/platilla ejs


// middlewares


//routes
app.use(require('./routes/index'));

//static file
app.use(express.static(path.join(__dirname,'public')));

// listering the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
