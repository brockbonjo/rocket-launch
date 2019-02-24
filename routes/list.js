var express = require('express');
var router = express.Router();
var launchesCtrl = require('../controllers/launches');

router.post('/list', isLoggedIn, launchesCtrl.addToList);

// DELETE /facts/:id
router.delete('/facts/:id', launchesCtrl.deleteFact);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
