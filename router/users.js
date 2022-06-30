const router = require('express').Router()
const {users, user, login, create} = require('../controllers/userControllers')

router.get('/users', users)
router.get('/users/:email', user)
router.post('/login', login )
router.post('/create', create)

module.exports = router