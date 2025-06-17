const asyncHandler = require('express-async-handler')

const Job = require('../models/jobModel')

const getJobs = asyncHandler(async (req, res) => {
    const jobs = await Job.find()

    res.status(200).json(jobs)
})

const createJob = asyncHandler(async (req, res) => {
    const job = await Job.create({ user: req.body.userId, text: req.body.text })

    res.status(200).json(job)
})

const getJobByUser = asyncHandler(async (req, res) => {
    const  userId  = req.body
    console.log(req.body)
    const job = await Job.find({ user: userId})
    
    res.status(200).json(job)
})

module.exports = { getJobs, createJob, getJobByUser }