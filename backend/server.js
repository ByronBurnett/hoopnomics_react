//sk_test_51MBaXrHkxKmcowOH13OOVu2edNx7T3U7XIEdHKtNR7oVZnsPOZ2yhJeXIhrKDgdIp8E8zA0s0vyUnYsBfP959ApG00ZMXpqeS9
//Blue Hoodie: price_1MBadjHkxKmcowOHQpOxsNop
// Grey Beanie: price_1MBb0rHkxKmcowOHO5fnLTdw
//Truck Hat: price_1MBb6FHkxKmcowOH9yrDp5pY
require('dotenv').config()
let express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const stripe = require('stripe')('sk_test_51MBaXrHkxKmcowOH13OOVu2edNx7T3U7XIEdHKtNR7oVZnsPOZ2yhJeXIhrKDgdIp8E8zA0s0vyUnYsBfP959ApG00ZMXpqeS9');   
const app = express();
app.use(cors());
app.use(express.static("public"));    


//Route to Checkout  

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [   
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
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

app.listen(4000, () => console.log("Listening on port 4000!"));

let app2 = express(); 
const blogRoutes = require('./Routes/blogs')
const userRoutes = require('./Routes/User')
app2.use(express.json({limit: '50mb'}));
app2.use(express.urlencoded({limit: '50mb', extended: true}));    
app2.use(express.json())
app2.use((req, res, next) => {
console.log(req.path, req.method)
next()
})

app2.use(cors({credentials:true,origin:'http://localhost:3000'}));
app2.use('/uploads', express.static(__dirname + '/uploads'));

app2.use('/api/blogs', blogRoutes)  
app2.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() =>   { 
    app2.listen(4001, () => console.log("Connected to db & Listening on port 4001!"));
})
.catch((error) =>{      
    console.log(error)      
})

