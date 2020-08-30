const express = require("express")
const port = 8081
const app = express()
const path = require("path")
const curriculumController = require("./controllers/curriculum-controller")

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get(
    '/',
    (req, res) => res.render(
        'index',
        {
            title: 'Curriculum',
            version: '0.0.0'
        }
    )
)

app.get(
    '/curriculum',
    (req, res) => res.render(
        'curriculum',
        curriculumController.getCurriculum()
    )
)

app.listen(
    port,
    () => console.log(
        `Server is listening on localhost:${port}`
    )
)