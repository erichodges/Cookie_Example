var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req,res,next){
    res.cookie('views',parseInt(req.signedCookies.views || 0) + 1, {signed: true, secure: true, httpOnly: true});

    res.render('index', { title: 'Express', views: (req.signedCookies.views || 0)});
});

router.get('/clear', function(req, res, next){
	res.clearCookie('views');
	res.redirect('/');
});

module.exports = router;

