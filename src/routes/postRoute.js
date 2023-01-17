const express = require('express')
const postcontroller = require('../controllers/postcontroller')

const router = express.Router();

router.get('/', postcontroller.getAllPost)
router.post('/create', postcontroller.createPost)
router.put('/update', postcontroller.editPost)
router.delete('/delete/:id', postcontroller.deletePost)

module.exports = router