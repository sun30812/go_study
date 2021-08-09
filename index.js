const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 8080);
app.use(express.static('public'));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/dashboard', (req, res) => {
	res.sendFile(path.join(__dirname, 'dashboard.html'));
})
app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, 'login.html'));
})
app.listen(app.get('port'));