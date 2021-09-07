const Router = require('@koa/router')
const s_router = new Router()

const subjectController= require('../controllers/subjects')
const { auth } = require('../middlewares/auth')

//显示课程列表
s_router.get('/list', auth, subjectController.getSubjectList)

//搜索课程
s_router.get('/search/:course', auth, subjectController.searchSubject)


module.exports = s_router