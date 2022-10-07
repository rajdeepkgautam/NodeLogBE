const express = require('express');
const app = express();
const port = 8080 || process.env.PORT;
const bodyParser = require('body-parser');
const cors = require('cors');



//GlobalMiddleware
app.use(bodyParser.json());
app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));


//ROUTE
app.post('/login', (req,res)=>{
    // console.log(req.body);
    // console.log(req.body.email);
    // console.log(req.body.pass);
    const {email, pass} = req.body;
    if(email==="imrkgautam007@gmail.com"){
        if(pass==="123321123"){
            res.json({"log":true})
        }else{
            res.json({"log":false})
        }
    }else{
        res.json({"log":false})
    }

    res.end()
})


app.listen(port, ()=>{
    console.log(`Connected To Port ${port}👍`)
})