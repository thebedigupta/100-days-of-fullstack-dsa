const express = require('express');
const app = express();



const port = 3000 || env.process.port;

app.set("view engine","ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/submit',(req,res)=>{

    const username = req.body.username.trim().toUpperCase();
    const password = req.body.password.trim();


    res.render('dashboard',{
        username,password
    })
})

app.post('/api/hello/',(req,res)=>{
  const username = req.body.username?.trim();

  if(!username){
    return res.status(400).json({error : "Username is required"});
  }

  res.json({
    message : `Hello ${username.toUpperCase()} 👋`
  })
})


app.listen(port,() => {
    console.log(`Server is running at ${port}`);
});