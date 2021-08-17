const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('index');
});
router.get('/dashboard', (req, res) => {
	res.render('dashboard');
});
router.get('/settings', (req, res) => {
	res.render('settings');
});
router.get('/login_page', (req, res) => {
	res.render('login');
});

module.exports = router;