const express = require('express')
const Quiz = require('../models/quiz')
const router = express.Router()

router.get('/quiz/:courseTitle', async (req, res) => {
    try{
        const quiz = await Quiz.findOne({courseTitle: req.params.courseTitle})
        if(quiz){
            res.json(quiz)
        } else {
            res.status(400).json({ mssg: 'Quiz not found for this course' })
        }
    } catch (error) {
        res.status(404).json({ mssg: 'Error fetching quiz data' })
    }
})

module.exports = router
