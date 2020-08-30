const curriculum = require("../models/curriculum-model")

exports.getCurriculum = () => curriculum

exports.getTitle = () => curriculum.title

exports.getName = () => curriculum.name

exports.getProfession = () => curriculum.profession

exports.getDescription = () => curriculum.description

exports.getExperience = () => curriculum.experience