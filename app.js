const express = require("express")
const port = 8081
const app = express()
const path = require("path")

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
        {
            title: 'Curriculum Vitae',
            name: 'Gabriel Alves Moreira',
            profession: 'Software developer',
            description: 'Computer engineeer and full stack developer',
            experience: [
                {
                    company: 'Embraer',
                    office: 'Salesforce developer',
                    description: 'Web development internship'
                },
                {
                    company: 'Tokenlab',
                    office: 'Mobile developer',
                    description: 'Mobile development internship'
                }
            ]
        }
    )
)

app.listen(
    port,
    () => console.log(
        `Server is listening on localhost:${port}`
    )
)