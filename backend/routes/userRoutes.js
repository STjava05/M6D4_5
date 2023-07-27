const app = require('express').Router();
const userCtrl = require('../controllers/user');
const multer = require('../middleware/multer-config');



app.get('/', userCtrl.getAllUser);
app.get('/:id', userCtrl.getOneUser);
app.patch('/:id', userCtrl.modifyUser);
app.delete('/:id', userCtrl.deleteUser);
app.post('/register', multer, userCtrl.createUser);

module.exports = app;