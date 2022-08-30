import express from 'express'
import cors from 'cors'
const basket = [
    {
        id:1,
        title:"qerapa",
        quantity: 5,
        price: 4.99
    },
    {
        id:2,
        title:"papuqe",
        quantity: 7,
        price: 3.99
    },
    {
        id:3,
        title:"dorza",
        quantity: 9,
        price: 5.99
    }
]

const app = express()
app.use(cors())
const port = 4321



app.get('/', (req, res) => {
    res.send(`<h1>Mires se vini ne app tim!!</h1>
    <p>we have the following resources:</p>
    <ul>
    <li><a href="/basket">Basket</a></li>
    </ul>
    `)
})

app.get('/basket', (req, res) => {
    res.send(basket)
})

app.listen(port, function() {
    console.log(`App un running yay! http://localhost:${port} `)
})