const express = require('express');
const serverless = require('serverless-http');
const app = express();





// set up directory 
app.use(express.static(__dirname + '/public'));

// import handlebars and setup template engine
const hbar = require('express-handlebars');
app.engine('handlebars', hbar());
app.set('view engine', 'handlebars');

// setup our routes
app.get('/',(req,res) => {
    res.render('home');
});

app.get('/resume', (req,res) => {
    res.download('./Mullin_Resume.pdf');
});




app.listen(process.env.PORT || 3000, () => {
    nsole.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});