const express = require("express")
const port = 3000
const app = express()

app.get(
    '/',
    (req, res) => res.send({
        title: 'Curriculum',
        version: '0.0.0'
    })
)

app.listen(
    port,
    () => console.log(
        `Server is listening on localhost:${port}`
    )
)