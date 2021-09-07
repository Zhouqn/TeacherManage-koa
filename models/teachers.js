const dbUtils = require('./../utils/db')

const teacher = {

    //获取教师信息列表/搜索教师
    async getTeacherList( query ) {
        const {count, page} = query
        let start = (page-1)*(count)
        if (query.query === ''){
            let _sql_part = `select * from teacherMsg limit ${start}, ${count}`
            let _sql_all = `select * from teacherMsg`
            let result_part = await dbUtils.query( _sql_part )
            let result_all = await dbUtils.query( _sql_all )
            if ( result_part.length <= 0 || result_all.length <= 0) {
                return null
            }
            return {
                result_part,
                result_all
            }
        }else {
            let _sql_part = `select * from teacherMsg where username like "%${query.query}%" limit ${start}, ${count}`
            let _sql_all = `select * from teacherMsg where username like "%${query.query}%"`
            let result_part = await dbUtils.query( _sql_part )
            let result_all = await dbUtils.query( _sql_all )
            if ( result_part.length <= 0 || result_all.length <= 0) {
                return null
            }
            return {
                result_part,
                result_all
            }
        }
    },

    //获取某个教师信息列表
    async getOneTeacher( t_id ) {
        let _sql = `select * from teacherMsg where id=${t_id}`
        let result = await dbUtils.query( _sql )
        if ( Array.isArray(result) && result.length > 0 ) {
            result = result[0]
        } else {
            result = null
        }
        return result
    },

    //添加信息
    async addTeacher( teacherInfo ) {
        const {username, nickname, subject, address, birthDay, decTeacher, email, gender, joinDate, phone, } = teacherInfo
        let _sql = `insert into teacherMsg (username, nickname, subject, address, birthDay, decTeacher, email, gender, joinDate, phone)
values ("${username}", "${nickname}", "${subject}", "${address}", "${birthDay}", "${decTeacher}",
"${email}", "${gender}", "${joinDate}", "${phone}")`
        try {
            const result = await dbUtils.query(_sql)
            return result
        }catch (e) {
            return null
        }
    },

    //编辑信息
    async editTeacher(teacherInfo)  {
        const {id, username, nickname, subject, address, birthDay, decTeacher, email, gender, joinDate, phone, } = teacherInfo
        const _sql = `update teacherMsg set username="${username}",nickname="${nickname}",subject="${subject}",
address="${address}", birthDay="${birthDay}", decTeacher="${decTeacher}", email="${email}", gender="${gender}",joinDate="${joinDate}",
phone="${phone}" WHERE id = ${id}`
        try {
            const result = await dbUtils.query(_sql)
            return result
        }catch (e) {
            return null
        }
    },

    //删除教师信息
    async deleteTeacher(t_id) {
        const _sql = `delete from teacherMsg where id = ${t_id}`
        try {
            const result = await dbUtils.query(_sql)
            if (result.affectedRows) {
                return result
            }else {
                return null
            }
        }catch (e) {
            return null
        }
    }

}

module.exports = teacher