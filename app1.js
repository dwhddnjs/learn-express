const express = require('express')

const app = express()

//app.METHOD(PATH, HANDLER(req, res, next))구조 
//HANDLER 미들웨어 라고 함
//express 미들웨어의 연결
// app.all : 위 모든 것을 처리
// app.use(미들웨어) : 모든 곳에서 미들웨어 사용하겠다!
//  - app.use('/hello', 미들웨어) : '/hello'에서만 미들웨어 사용하겠다!
//  - app.get('/hello', 미들웨어) : '/hello'에서 get 요청일때만 미들웨어 사용하겠다!
// app.set을 통해 데이터 저장 가능
// app.route(체인 가능한 라우트 핸들러 작성 가능, 여러 메서드 연결 가능하다는 얘기)
// express.Router : Router 클래스를 사용하면 모듈식 마운팅이 가능, Router 인스턴스는 완전한 미들웨어, 하나로서 라우팅 시스템, 미니 앱이라 불림 -> 그림으로 표현해드림, 실습은 009에서

app.get('/', (req, res, next) => {
    console.log('get으로 요청 들어옴')
    res.send('hello world')
})

// res.download()	파일이 다운로드되도록 프롬프트합니다.
// res.end()	응답 프로세스를 종료합니다.
// res.json()	JSON 응답을 전송합니다.
// res.jsonp()	JSONP 지원을 통해 JSON 응답을 전송합니다.
// res.redirect()	요청의 경로를 재지정합니다.
// res.render()	보기 템플리트를 렌더링합니다.
// res.send()	다양한 유형의 응답을 전송합니다.
// res.sendFile()	파일을 옥텟 스트림의 형태로 전송합니다.
// res.sendStatus()	응답 상태 코드를 설정한 후 해당 코드를 문자열로 표현한 내용을 응답 본문으로서 전송합니다.
app.listen(8080)