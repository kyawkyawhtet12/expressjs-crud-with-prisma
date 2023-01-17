const express = require('express');
const usercontroller = require('../controllers/usercontroller');

const router = express.Router();

router.get('/', usercontroller.getAllUsers)
router.post('/create',usercontroller.createUser)
router.put('/update',usercontroller.updateUser)
router.delete('/delete/:id',usercontroller.deleteUser)

module.exports = router;