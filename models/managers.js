const dbUtils = require('./../utils/db')

const manage = {

     // 根据用户名和密码查找用户（登陆）
    async getOneByUserNameAndPassword( data ) {
        let _sql = `select * from teacherManage where username="${data.username}" and password="${data.password}"`
        let result = await dbUtils.query( _sql )
        if ( Array.isArray(result) && result.length > 0 ) {
            result = result[0]
        } else {
            result = null
        }
        return result
    },

    //获取管理员信息（查询）
    async getUserInfoByUserId( user_id ) {
        const _sql = `select * from teacherManage where id="${user_id}"`
        let result = await dbUtils.query(_sql)
        if ( Array.isArray(result) && result.length > 0 ) {
            result = result[0]
        } else {
            result = null
        }
        return result
    },

    //修改管理员信息（修改）
    async editMessage(manageInfo) {
        const {id, username, gender, birthDay, telephone, position, email, decManager, joinDate, address} = manageInfo
        const _sql = `update teacherManage set username="${username}",
gender="${gender}",birthDay="${birthDay}",joinDate="${joinDate}",
telephone="${telephone}",position="${position}",email="${email}",
decManager="${decManager}",address="${address}" WHERE id = ${id}`
        try{
            await dbUtils.query( _sql)
        }catch (e) {
            return null
        }
        return {
            user_id: id,
            username: username
        }
    }

}


module.exports = manage