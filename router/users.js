const router = require('express').Router()
const {users, user} = require('../controllers/userControllers')

router.get('/users', users)
router.get('/users/:email', user)


module.exports = router