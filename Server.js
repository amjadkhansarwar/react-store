// sk_test_51LwAvCIQDRcAaARdvJTLoOPLYWM47hbFbrjjVuvcrhEg5Cz4qHn1d7xhDf8OiRb8ycfa0MgrIdfv39TZPgZwOGlg00ikLRxNd1
// Coffee: price_1LwB2vIQDRcAaARdTI74yRla
// Sunglasses: price_1LwB4RIQDRcAaARdtCZraYaU
// Camera :price_1LwB5hIQDRcAaARdasmN55Ve

const express = require('express')
var cors = require('cors')
const stripe = require('stripe')('sk_test_51LwAvCIQDRcAaARdvJTLoOPLYWM47hbFbrjjVuvcrhEg5Cz4qHn1d7xhDf8OiRb8ycfa0MgrIdfv39TZPgZwOGlg00ikLRxNd1')

const app = express()
app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.post('/checkout', async(req, res)=>{
    console.log(req.body)
    const items = req.body.items
    let lineItem= []
    items.forEach((item) => {
        lineItem.push({
            price: item.id,
            quantity: item.quantity
        })
    });
    const session = await stripe.checkout.sessions.create({
        line_items: lineItem,
        mode: 'payment',
        success_url:'http://localhost:3000/success',  
        cancel_url:'http://localhost:3000/cancel'  
    })
    res.send(JSON.stringify({
        url: session.url
    }))
})

app.listen(4000, ()=>console.log('listening on port 4000'))