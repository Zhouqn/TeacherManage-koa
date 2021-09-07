const subjectService = require('../services/subjects')

const subject = {
    //获取课程列表
    async getSubjectList(ctx, next){
        const subjectResult = await subjectService.getSubjectList()
        if (subjectResult) {
            await ctx.render('success.ejs', {
                data:JSON.stringify({
                    subjects:subjectResult
                })
            })
        }else {
            await ctx.render('fail.ejs', {
                message:JSON.stringify('无课程信息！')
            })
        }
    },

    //搜索课程
    async searchSubject(ctx, next) {
        const course = ctx.params.course
        const subjectResult = await subjectService.searchSubject(course)
        if (subjectResult) {
            await ctx.render('success.ejs', {
                data:JSON.stringify({
                    subjects:subjectResult
                })
            })
        }else {
            await ctx.render('fail.ejs', {
                message:JSON.stringify('无此课程信息！')
            })
        }
    }
}

module.exports = subject