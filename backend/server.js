const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser');
const { text } = require('express');
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
     // console.log(req.header('Authorization'));
    const userId = req.header('Authorization');
    const user = users[userId];
    let msg= {user:user.userName, text: req.body.message};
//     console.log(msg);
    messages.push(msg);
     res.json(msg);
});
app.post('/register',(req,res) => {
     // console.log(req.header('Authorization'));
    let registerData = req.body;
     let newIndex= users.push(registerData);
     registerData.id= newIndex-1;
     res.json(registerData);
});
app.get('/singlemessage/:id',(req,res) => {
    console.log(req.params.id);
     res.send(messages[req.params.id]);
});
 app.listen(port,() => console.log("app") );