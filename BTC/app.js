const crypto = require('crypto');
const request = require('request');
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const firebase = require('firebase');
const fs = require('fs');
let info = [];
let addList = [];

// App Initialized
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Public Paths
app.use(express.static(path.join(__dirname, 'public')));


// Instantiate client 
const Client = require('coinbase').Client;
let client = new Client({
    'apiKey': '1sKMh9EoyvcYfXBg',
    'apiSecret': 'aAGTrqUhDetG7Zqdy0E7aEQxtVhACl9U'
})


client.getAccount('2e55fd31-d587-5199-b7b2-0babbecf7cdf',(err, account) => {
    if(err) console.log(err);
    account.getTransactions({},function(err,data){
        data.forEach((xfer)=>{
            let txdate = xfer.updated_at.slice(0,4);
            if(parseInt(txdate)>=2018){
                info.push(xfer);
            }    
        })
    })
});


//Uncomment if you need to list the addresses

// client.getAccount('2e55fd31-d587-5199-b7b2-0babbecf7cdf', function(err, account) {
//     account.getAddresses({},(err, addresses) =>{
//         addresses.forEach((add)=>{
//             console.log(add.address);
//         })
//     });
// });



// New Address Generation 
app.post('/generate', (req, res)=> {
    client.getAccount('2e55fd31-d587-5199-b7b2-0babbecf7cdf', (err, account) => {
        account.createAddress(null,(err, address) => {
            if (err) console.log(err);
            res.json(address);
        });
    });
})

// Render the Home Route
app.get('/', (req,res) => {
    res.render('index',{
        data: info,
    });
});


// Server Start
app.listen(3000, ()=>{
    console.log('server running...');
})




