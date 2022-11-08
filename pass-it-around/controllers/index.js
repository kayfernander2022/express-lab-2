const express = require('express');
const router = express.Router();

let number_of_bottles = 99;

router.get("/", (req, res) => {
  res.render('all.ejs', {number_of_bottles})
});

router.get("/:number_of_bottles", (req, res) => {
  number_of_bottles = req.params.number_of_bottles;

  if(number_of_bottles != 0)
  {
    res.render('all.ejs', {number_of_bottles});
  }
  else{
    number_of_bottles = 99;
    res.send('<a href="/">Start Over<a/>');
  }
});

module.exports = router //exporting out these routers.  Making the routes exportable.