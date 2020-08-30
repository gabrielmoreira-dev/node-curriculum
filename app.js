const express = require('express')
const port = 8081
const app = express()
const path = require('path')
const createError = require('http-errors')
const index = require('./routes/index')
const curriculum = require('./routes/curriculum')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/curriculum', curriculum)

app.use(
    (req, res, next) => next(createError(404))
)
app.use(
    (err, req, res, next) => {
        res.locals.message = err.message
        res.locals.error = req.app.get('env') === 'development'
            ? err
            : {}
        res.status(err.status || 500);
        res.render('error');
    }
)

app.listen(
    port,
    () => console.log(
        `Server is listening on localhost:${port}`
    )
)