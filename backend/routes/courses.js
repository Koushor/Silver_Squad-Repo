const express = require('express')
const Course = require('../models/course')
const router = express.Router()

router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find()
        res.json(courses)
    } catch (error) {
        res.status(400).json({mssg: 'Error while fetching'})
    }
})

module.exports = router
