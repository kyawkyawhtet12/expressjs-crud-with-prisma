const express = require('express');
const bodyParser = require('body-parser');
const userRouters = require('../Express-Crud/src/routes/userRoute');
const postRouters = require('../Express-Crud/src/routes/postRoute' );


const PORT = 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouters)
app.use('/posts', postRouters)

app.listen(PORT, ()=>{
    console.log(`listening on port${PORT}`);
})