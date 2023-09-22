const express = require('express');
const app = express();
const router = require('./routes/index')
const port = 8080;

app.use("/api/v1", router);

app.listen(port,()=>{
    console.log(`App is listing at prot ${port}`)
});
