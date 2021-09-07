const Router = require('@koa/router')
const m_router = new Router()

const manageController = require('../controllers/managers')
const { auth } = require('../middlewares/auth')

//保存管理员信息
m_router.post('/editMessage', auth, manageController.editMessage)

//管理员信息展示
m_router.get('/showMessage', auth, manageController.getManageInfoByUserId)

//登陆
m_router.post('/signin', manageController.signIn)

//退出登录
m_router.get('/signout', auth, manageController.signOut)


module.exports = m_router