const express = require('express')
const postcontroller = require('../controllers/postcontroller')

const router = express.Router();

router.get('/', postcontroller.getAllPost)
router.post('/create', postcontroller.createPost)
router.post('/update', postcontroller.editPost)

module.exports = router