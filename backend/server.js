//sk_test_51MBaXrHkxKmcowOH13OOVu2edNx7T3U7XIEdHKtNR7oVZnsPOZ2yhJeXIhrKDgdIp8E8zA0s0vyUnYsBfP959ApG00ZMXpqeS9

//Blue Hoodie: price_1MBadjHkxKmcowOHQpOxsNop

// Grey Beanie: price_1MBb0rHkxKmcowOHO5fnLTdw

//Truck Hat: price_1MBb6FHkxKmcowOH9yrDp5pY

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51MBaXrHkxKmcowOH13OOVu2edNx7T3U7XIEdHKtNR7oVZnsPOZ2yhJeXIhrKDgdIp8E8zA0s0vyUnYsBfP959ApG00ZMXpqeS9');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());


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

