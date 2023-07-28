const express = require('express') //  모듈 사용하겟다. import와 비슷
const app = express()
const cors = require('cors')

app.use(cors()) //  비워놓으면 모든 요청에 대해 허용

// 컨트롤러 메소드
app.get('/', function (req, res) { // .get = http method,  '/' = 경로(라우팅),
  res.send('Hello World')
})

app.get('/dog', (req, res) => {
    res.send('강아지')
})

app.get('/cat', (req, res) => {
    res.json('고양이') // json 전송
})

app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q)
    const p = req.query
    console.log(p)

    res.send(p)
    
})

app.get('/souond/:name', (req, res) => {
   const { name } = req.params

   if(name=='dog'){
    res.json({'sound':'멍멍'})
   } else if(name == 'cat'){
    res.json({'sound':'야옹'})
   } else if(name=='pig'){
    res.json({'sound':'꿀꿀'})
   } else {
    res.json({'sound':'null'})
   }
    
})

app.listen(3000) // 3000포트로 실행