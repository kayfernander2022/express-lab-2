const express = require("express");
const app = express();




app.get("/greeting/:name", (req, res) => {
  
  res.send('Hello ' + req.params.name + " Its so great to see you!")
});




app.get("/tip/:total/:tipPercentage", (req, res) => {
const totalBill = parseInt(req.params.total); //100
const tipPercentageIs = parseInt(req.params.tipPercentage); //20

let sum = ((tipPercentageIs / 100)* totalBill)// 20/100
  res.send (sum+"")
  
});



let magicResponsesArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]




app.get("/magic/:question/:magicResponsesArr", (req, res) => {
  
  const questionIs =(req.params.question);
let answer = magicResponsesArr[Math.floor(Math.random()* magicResponsesArr.length)]

res.send("Question to Magic 8 Ball: " + questionIs + " Answer from Magic 8 Ball: " + answer)
    
  });



app.listen(3001, () => {
  console.log('Hey, listening on port 3001');
});
