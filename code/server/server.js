var express= require("express");
var mysql= require("mysql");

function connect()
{
    const connection= mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'manager',
        database:'movies',
        port :3306
    })
    connection.connect();
    return connection
}

const app =express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/',(request,responce)=>{

    responce.send("welcome to my application");
});



app.listen(4000,function(){

    console.log("server started..")
});