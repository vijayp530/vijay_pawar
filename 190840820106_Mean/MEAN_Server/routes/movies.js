var express= require("express");
var mysql= require("mysql");

var mv =express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'movies'
});

connection.connect();

mv.get("/",function(req,res){

    connection.query("select * from Movies",function(err,result){

        if(err==null)
        {
            res.contentType("application/json");
            res.send(JSON.stringify(result));
        }
        else{
            res.contentType("application/json");
            res.send(err);
        }
    });
});

mv.post("/",function(req,res){
 let no= parseInt(req.body.No);
 let name= req.body.Name;
 let dir= req.body.Dir;
 let rat=parseInt(req.body.Rat);
 let bud=req.body.Bud;

 let query= `insert into Movies values (${no},'${name}','${dir}',${rat},'${bud}')`;

 console.log(query);
 connection.query(query,function(err,result){

    if(err==null)
    {
        res.contentType("application/json");
        res.send(JSON.stringify(result));
    }
    else{
        res.contentType("application/json");
        res.send(err);
    }
 });

});

module.exports=mv;