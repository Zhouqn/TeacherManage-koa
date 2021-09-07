const teacherService = require('../services/teachers')

const teacher = {
    //获取教师信息
    async getTeacherList(ctx, next) {
        const query = ctx.query
        const teacherResult = await teacherService.getTeacherList(query)
        if (teacherResult) {
            await ctx.render('success.ejs', {
                data: JSON.stringify(teacherResult)
            })
        }else {
            await ctx.render('fail.ejs', {
                message: JSON.stringify('教师信息不存在！')
            })
        }
    },

    //获取某个教师信息
    async getOneTeacher(ctx, next) {
        const t_id = ctx.params.id
        const teacherResult = await teacherService.getOneTeacher(t_id)
        if (teacherResult) {
            await ctx.render('success.ejs', {
                data: JSON.stringify({
                    teacher: teacherResult,
                })
            })
        }else {
            await ctx.render('fail.ejs', {
                message: JSON.stringify('获取教师信息失败！')
            })
        }
    },

    //添加教师
    async addTeacher(ctx, next) {
        const data = ctx.request.body
        const teacherResult = await teacherService.addTeacher(data)
        if (teacherResult) {
            await ctx.render('success.ejs', {
                data: JSON.stringify("添加成功！")
            })
        } else {
            await ctx.render('fail.ejs', {
                message: JSON.stringify('添加教师信息失败！')
            })
        }
    },

    //编辑教师信息
    async editTeacher(ctx, next){
        const data = ctx.request.body
        const teacherResult = await teacherService.editTeacher(data)
        if (teacherResult) {
            await ctx.render('success.ejs', {
                data: JSON.stringify("修改成功！")
            })
        } else {
            await ctx.render('fail.ejs', {
                message: JSON.stringify('修改教师信息失败！')
            })
        }
    },

    //删除教师信息
    async deleteTeacher(ctx, next) {
        const query = ctx.query
        const teacherResult = await teacherService.deleteTeacher(query)
        if (teacherResult) {
            await ctx.render('success.ejs', {
                data: JSON.stringify("删除成功！")
            })
        } else {
            await ctx.render('fail.ejs', {
                message: JSON.stringify('删除教师信息失败！')
            })
        }
    }

}

module.exports = teacher