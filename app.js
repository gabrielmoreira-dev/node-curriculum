const express = require('express')
const port = 8081
const app = express()
const path = require('path')
const index = require('./routes/index')
const curriculum = require('./routes/curriculum')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', index)
app.use('/curriculum', curriculum)

app.listen(
    port,
    () => console.log(
        `Server is listening on localhost:${port}`
    )
)