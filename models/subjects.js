const dbUtils = require('./../utils/db')

const subject = {

    //获取课程列表
    async getSubjectList(){
        const _sql = `select * from subjects`
        let result = await dbUtils.query( _sql )
        if (result.length <= 0) {
            result = null
        }
        return result
    },

    //搜索课程信息
    async searchSubject(course) {
        const _sql = `select * from subjects where course like "%${course}%"`
        let result = await dbUtils.query( _sql )
        if (result.length <= 0) {
            result = null
        }
        return result
    }

}

module.exports = subject