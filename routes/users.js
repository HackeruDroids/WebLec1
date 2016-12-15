var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/usr', function(req, res, next) {
  res.render('usr', {message:'Hello', title:'TomerBu', layout:'layoutNext'});
});


module.exports = router;
