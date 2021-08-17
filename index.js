const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const app_port = 8080;

const pageRouter = require('./routes/pages');
const authRouter = require('./routes/auth');

app.set('port', process.env.PORT || app_port);
app.set('view engine', 'html');
nunjucks.configure('views', {
	express: app,
	watch: false,
})
app.use(express.static('public'));
app.use('/', pageRouter);
app.use('/auth', authRouter);
app.listen(app.get('port'), () => {
	console.log(`현재 ${app.get('port')}번 포트에서 서버를 열었습니다. 포트는 서버의 환경변수를 통해 지정하는 것을 권장하며 테스트 용으로만 실행하는 경우 index.js 상단에 app_port상수를 수정하여 포트번호를 지정할 수 있습니다.`);
});