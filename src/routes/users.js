const express = require('express')
const router = express.Router()
const usersController = require('../app/controllers/UsersController')


router.get('/create', usersController.create)
router.post('/store', usersController.store)
router.get('/:_id/edit', usersController.edit)
router.put('/:_id', usersController.update)
router.delete('/:_id', usersController.delete)
router.get('/:slug', usersController.show)
router.get('/', usersController.index)

module.exports = router