const router = require('express').Router()
const {users, user, login} = require('../controllers/userControllers')

router.get('/users', users)
router.get('/users/:email', user)
router.post('/login', login )

module.exports = router