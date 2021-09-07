const subjectModel = require('./../models/subjects')

const subject = {
    //获取课程列表
    async getSubjectList() {
        const resultData = await subjectModel.getSubjectList()
        return resultData
    },

    //搜索课程
    async searchSubject(course) {
        const resultData = await subjectModel.searchSubject(course)
        return resultData
    }
}

module.exports = subject