const express = require('express')
const userRouter = require('./router/users')

const app = express()
const PORT = 5000;

// app.get('/', (req, res) => {
//     res.send('Welcome dear user')
// })
// app.get('/user', (req, res) => {
//     res.status(200).json(data)
// })

app.use('/', userRouter)
// app.get('/:email', function(req, res) {
// 	const userEmail = req.params.email;
// 	data.findById(userEmail, function(err, users) {
// 		res.json(users );
// 	});
// });

app.listen(PORT, ()=>{
    (console.log(`Server running at  http//:localhost:${PORT}`))
})