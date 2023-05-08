require('dotenv').config();

var express = require('express');
var cors = require('cors');
const fs = require('fs');
const stripe = require('stripe')('sk_test_51MBaXrHkxKmcowOH13OOVu2edNx7T3U7XIEdHKtNR7oVZnsPOZ2yhJeXIhrKDgdIp8E8zA0s0vyUnYsBfP959ApG00ZMXpqeS9');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const Post = require('./models/Post');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');




const salt = bcrypt.genSaltSync(10);



let app = express();
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.static("public"));
app.use(express.json());


//const port = process.env.PORT || 4000;
const port2 = process.env.PORT || 4001;    


//Route to Checkout

app.post("/checkout", async (req, res) => {
    
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

//app.listen(port, () => console.log(`Listening on port ${port}!` ));


//Blog Server

const app2 = express();

app2.use(cors({
  credentials:true,
  origin:'https://mern-crud-ued0.onrender.com/'}));  


  const mongoose = require('mongoose')     

//Middleware
app2.use(express.json())
       
app2.use('/uploads', express.static(__dirname + '/uploads'));
app2.use(cookieParser());

//connect to db
mongoose.connect(process.env.MONG_URI)
.then(() => {
    app2.listen(port2, ()  => console.log(`connected to db & listening on port ${port2}!` ))
}).catch((error) => {
    console.log(error)
})


app2.post('/register', async (req, res)   => {
    
    const {username, password} = req.body;
    
    try{
        const userDoc = await User.create({
            username, 
            password:bcrypt.hashSync(password, salt),
        })
        res.json(userDoc);
    } catch(e) {
      console.log(e);
       res.status(400).json(e);
    }
     

});


app2.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password)
    
    if (passOk) {
     // logged in
     jwt.sign({username,id:userDoc._id}, process.env.SECRET_1, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id:userDoc._id,
          username,
          
        });
        console.log(token) 
     }) 
     // res.json();
    } else {
        res.status(400).json('wrong credentials');
    }

   
  });


  app2.get('/profile', (req, res) => {
    const {token} = req.cookies;
      jwt.verify(token, process.env.SECRET_1, {}, (err, info) => {
       if (err) throw err;
        res.json(info);
      });
     
     });

     
     app2.post('/logout' , (req, res) => {
      res.cookie('token', '').json('ok')
    });
  




app2.post('/post', upload.single('file'), async (req,res) => {
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length -1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);
  
   
    const {token} = req.cookies;
    jwt.verify(token, process.env.SECRET_1, {}, async (err,info) => {
    if (err) throw err;
    const {title,summary,content} = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover:newPath,
      author:info.id,
    });
    res.json(postDoc);
  });

}); 


app2.put('/post', upload.single('file'), async (req,res) => {
    let newPath = null;
    if (req.file) {
      const {originalname,path} = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path+'.'+ext;
      fs.renameSync(path, newPath);
    }
  
    const {token} = req.cookies;
    jwt.verify(token, process.env.SECRET_1, {}, async (err,info) => {
      if (err) throw err;
      const {id,title,summary,content} = req.body;
      const postDoc = await Post.findById(id);
      const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
      if (!isAuthor) {
        return res.status(400).json('you are not the author');     
      }
      await postDoc.updateOne({      
        title,
        summary,    
        content,
        cover: newPath ? newPath : postDoc.cover,
      });
  
      res.json(postDoc);
    });
  
  });
    
    
    

  app2.get('/post', async (req, res) => {
   res.json(await Post.find()
   .populate('author', ['username']));
  });



app2.get('/post/:id', async (req , res)  => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
});






