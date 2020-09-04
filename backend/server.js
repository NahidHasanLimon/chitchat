const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser');
// const { text } = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

var  messages = [{user: "lim", text: "yes"},{user: "lim", text: "baby"}];
var users = [{userName: "lim", password:"1"}];

app.get('/messages',(req,res) => {
    
     res.send(messages);
});
app.post('/messages',(req,res) => {
    const token = req.header('Authorization');
    const userId= jwt.decode(token,'1234');
    const user = users[userId];
    let msg= {user:user.userName, text: req.body.message};
//     console.log(msg);
    messages.push(msg);
     res.json(msg);
});
app.post('/register',(req,res) => {
    let registerData = req.body;
     let newIndex= users.push(registerData);
     let userId= newIndex-1;

     let token = jwt.sign(userId,'1234');
     res.json(token);
});
app.post('/login',(req,res) => {
    let loginData = req.body;
     console.log(loginData);
     let userId= users.findIndex(user =>user.userName==loginData.userName);
    console.log(userId);
     if(userId == -1)
        return res.status(401).send({message: "Name is Invalid"});
    if(users[userId].password !=loginData.password)  
        return res.status(401).send({message: "password is invalid"});
     let token = jwt.sign(userId,'1234');
     res.json(token);
});
app.get('/singlemessage/:id',(req,res) => {
    console.log(req.params.id);
     res.send(messages[req.params.id]);
});
 app.listen(port,() => console.log("app") );