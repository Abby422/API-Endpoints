const express = require('express')
const bodyparser = require('body-parser');
const userRouter = require('./router/users')

const app = express()
const PORT = 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use('/', userRouter)


app.listen(PORT, ()=>{
    (console.log(`Server running at  http//:localhost:${PORT}`))
})