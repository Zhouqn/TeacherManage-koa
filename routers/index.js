const Router = require('@koa/router')
const router = new Router()

const manager = require('./managers')
const subject = require('./subjects')
const teacher = require('./teachers')

const { judge } = require('../middlewares/judgeLogin')



router.use('/api/manager', manager.routes(), manager.allowedMethods())

router.use('/api/subject', subject.routes(), subject.allowedMethods())

router.use('/api/teacher', teacher.routes(), teacher.allowedMethods())

router.get('/api/judge', judge)

module.exports = router