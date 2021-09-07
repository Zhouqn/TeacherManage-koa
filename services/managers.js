/**
 * 用户业务操作
 */

const manageModel = require('../models/managers')
const {formatDate} = require('../utils/tools')

const manage = {

    //登陆
    async signIn( data ) {

        const resultData = await manageModel.getOneByUserNameAndPassword(data)
        return resultData
    },

    //通过user_id获取管理员信息
    async getManageInfoByUserId( user_id ) {

        let resultData = await manageModel.getUserInfoByUserId( user_id )
        return resultData
    },

    //编辑管理员信息
    async editMessage(data) {
        const {teacherManager} = data
        const manageInfo = {
            ...teacherManager,
            birthDay: formatDate(teacherManager.birthDay),
            joinDate: formatDate(teacherManager.joinDate)
        }
        const resultData = await manageModel.editMessage(manageInfo)
        return resultData
    }

}

module.exports = manage
