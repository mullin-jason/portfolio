const express = require('express');
const serverless = require('serverless-http');
const app = express();
const PORT = process.env.PORT || '3000'




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


app.set("port", PORT);

app.listen(PORT, () => {
    console.log("we are now live on localhost: " + PORT);
});