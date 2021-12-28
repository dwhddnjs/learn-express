var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/main', (req, res) => {
  const data = req.body.data
  res.render("index")
})

module.exports = router;
