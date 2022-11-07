const express = require("express");
const app = express();




app.get("/greeting/:name", (req, res) => {
  //res.render('all.ejs', {fruits})
  res.send('Hello ' + req.params.name + " Its so great to see you!")
});




app.listen(3001, () => {
  console.log('Hey, listening on port 3001');
});
