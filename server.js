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




app.listen(3001, () => {
  console.log('Hey, listening on port 3001');
});
