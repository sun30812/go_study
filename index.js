const express = require('express');
const app = express();
const path = require('path');
const app_port = 8080;

app.set('port', process.env.PORT || app_port);
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
app.get('/settings', (req, res) => {
	res.sendFile(path.join(__dirname, 'settings.html'));
})
app.listen(app.get('port'), () => {
	console.log(`현재 ${app.get('port')}번 포트에서 서버를 열었습니다. 포트는 서버의 환경변수를 통해 지정하는 것을 권장하며 테스트 용으로만 실행하는 경우 index.js 상단에 app_port상수를 수정하여 포트번호를 지정할 수 있습니다.`);
});