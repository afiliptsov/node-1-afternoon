const express = require("express");
const bodyParser = require("body-parser");
const mc = require(__dirname + '/controllers/message_controller');

const app = express();

app.use(bodyParser.json());

const messageBaseUrl = "/api/messages";
app.use(express.static(__dirname + '/../public/build'));

app.post(messageBaseUrl, mc.createMessage);
app.get(messageBaseUrl, mc.readMessage);
app.put(`${messageBaseUrl}/:id`, mc.updateMessage);
app.delete(`${messageBaseUrl}/:id`, mc.deleteMessage);





app.listen(3000,()=>console.log("I am listening you at port 3000"))