// ce programme lit les données d'une requête POST avec body-parser

import express from 'express'
import bodyParser from 'body-parser'

const app = express()

const IP = '192.168.1.100'
const PORT = 7777

//Configure express to use body-parser as middleware.
app.use(bodyParser.urlencoded({ extended: false })) // to support URL-encoded bodies
app.use(bodyParser.json()) // to support JSON-encoded bodies

app.post('/hello', (req, res) => {
    // le body-parser effectue simplement un JSON.parse(body)
    // request.body is a js object containing the deserialized JSON
    console.log(req.body)
    if (req.body.name === 'Pierre') {
        res.status(403).send('Pierre is not allowed')
    }
    //close the connection
    res.end()
})

app.listen(PORT, IP, () => {
    console.log(`listening on ${IP}:${PORT}`)
})
