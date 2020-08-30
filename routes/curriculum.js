const express = require('express')
const router = express.Router()
const curriculumController = require("../controllers/curriculum-controller")

router.get(
    '/',
    (req, res) => res.render(
        'curriculum',
        curriculumController.getCurriculum()
    )
)

module.exports = router