var express = require('express');
var router = express.Router();

router.get('/login/:username/:password', (req, res) => {
  const session = req.session;
  const {username, password} = req.params
})

module.exports = router;
