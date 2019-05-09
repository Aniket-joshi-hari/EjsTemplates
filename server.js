
var express = require('express');
var app = express();
app.use( express.static( "public" ) );
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    
    var customer = [
        { orderId:'gfdghr',name: 'Bloody Mary', address:'Bangalore',bookToOrder:'5',bookToReturn: '2' },
        { orderId:'kxjhdi',name: 'hari', address:'Delhi',bookToOrder:'7',bookToReturn: '11'},
        { orderId:'jkgfbd',name: 'Andrew', address:'Hariyana',bookToOrder:'8',bookToReturn: '6'}
    ];
    var bookstoreturn = [
        { orderId:'gfdghr',name: ' Mary', address:'Bangalore',bookToOrder:'5',bookToReturn: '2' },
        { orderId:'kxjhdi',name: 'return', address:'Delhi',bookToOrder:'7',bookToReturn: '11'},
        { orderId:'jkgfbd',name: 'return', address:'Hariyana',bookToOrder:'8',bookToReturn: '6'}
    ];

    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth(); 
    var year = currentDate.getFullYear();
    var deliveryDate = (date + 2) + '/' + month + '/' + year ;
    var hello ="hey this is me";
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
      
        customer: customer,
        bookstoreturn : bookstoreturn ,
        tagline: tagline,
        hello: hello,
        deliveryDate : deliveryDate,
    });
});

// app.use('/public/images/', express.static('./public/images'));
// about page 

app.get('/about', function(req, res) {
    res.render('pages/about');
});


app.get('/test', function(req, res) {
    res.render('pages/invoicef');
});

app.get('/orderp', function(req, res) {
    res.render('pages/orderp');
});

app.get('/inv', function(req, res) {
    res.render('pages/invoice');
});

app.get('/welcome',function(req,res){
res.render('pages/welcome');
});

app.get('/reminder',function(req,res){
    res.render('pages/reminder');
    });
    

app.get('/customize', function(req, res) {
    res.render('pages/customize');
});

app.get('/zypher', function(req, res) {
    res.render('pages/zypher');
});
app.get('/wtest',function(req, res){
    res.render('pages/testwelcome')
});

app.get('/vikas',function(req, res){
    res.render('pages/vikasinvoice')
});

app.get('/newarrival',function(req, res){
    res.render('pages/newArrival')
});

app.get('/due',function(req, res){
    res.render('pages/invoiceDew')
});

app.get('/abandon',function(req, res){
    res.render('pages/abandon')
});

app.get('/active',function(req, res){
    res.render('pages/customerPaidUp')
});

app.get('/survey',function(req, res){
    res.render('pages/survey')
});

app.get('/welcomea',function(req, res){
    res.render('pages/welcomeAgain')
});


app.listen(8080);
console.log('8080 is the magic port');
