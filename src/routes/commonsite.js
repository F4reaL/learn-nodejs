const express = require('express')
const router = express.Router()
const commonSiteController = require('../app/controllers/CommonSiteController')

router.get('/', commonSiteController.home)
module.exports = router