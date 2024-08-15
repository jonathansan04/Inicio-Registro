const express = require('express');
const mysql =require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "inicioregistro"

});

app.post('/registro',(req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    db.query('INSERT INTO registro (name, email, password) VALUES (?,?,?)', [name,email,password],
    (err,result)=>{
        if(err){
             console.log(err)
        }else {
         res.send(result);
        }
    })
})


app.post('/login',(req,res)=>{
    
    db.query('SELECT * FROM registro WHERE email = ? AND password = ? ', [req.body.email,req.body.password],
        (err,result)=>{
        if(err){
            res.send("Error");
            console.log(err)
            throw err;
        }
        else if(result.length >0){
            res.send("Correcto");
           console.log(result)
        }else{
             res.send("Incorrecto");
             console.log("Ingreso incorrecto");
        }
    })
})


app.listen(8081, ()=>{
    console.log("Escuchandooo");
})

