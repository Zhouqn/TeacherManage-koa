const Router = require('@koa/router')
const t_router = new Router()

const teacherController = require('../controllers/teachers')
const { auth } = require('../middlewares/auth')


//获取教师信息
t_router.get('/list', auth, teacherController.getTeacherList)

//获取某个教师信息
t_router.get('/getOne/:id', auth, teacherController.getOneTeacher)

//添加教师
t_router.post('/add', auth, teacherController.addTeacher)

//编辑教师信息
t_router.post('/edit', auth, teacherController.editTeacher)

//删除教师信息
t_router.get('/delete', auth, teacherController.deleteTeacher)


module.exports = t_router