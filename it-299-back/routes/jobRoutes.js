const express = require('express')
const router = express.Router()

const { getJobs, createJob, getJobByUser } = require('../controllers/jobController')

router.route('/').get(getJobs).post(createJob)
router.get('/user', getJobByUser)

module.exports = router