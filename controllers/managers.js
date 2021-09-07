const manageService = require('../services/managers')

const manager = {

    //登陆
    async signIn( ctx, next ) {
        let data = ctx.request.body
        let manageResult = await manageService.signIn(data )
        if ( manageResult ) {

            //session方法
            ctx.session={
                user_id: manageResult.id
            }
            await ctx.render('success.ejs',{
                data: JSON.stringify({
                    user_id:manageResult.id,
                    username:manageResult.username
                })
            })
        } else {
            await ctx.render('fail.ejs', {
                message: JSON.stringify('用户名或者密码错误!')
            })
        }
    },

    //获取管理员信息
    async getManageInfoByUserId(ctx, next) {
        if (ctx.session.user_id) {
            const user_id = ctx.session.user_id
            const manageResult = await manageService.getManageInfoByUserId(user_id)
            if (manageResult) {
                await ctx.render('success.ejs', {
                    data: JSON.stringify({
                        manageInfo:manageResult
                    })
                })
            }else {
                await ctx.render('fail.ejs', {
                    message: JSON.stringify('查询个人信息失败!')
                })
            }
        }else {
            await ctx.render('fail.ejs', {
                message: JSON.stringify('请先登录!')
            })
        }
    },

    //编辑管理员信息
    async editMessage(ctx, next) {
        const data = ctx.request.body
        const manageResult = await manageService.editMessage(data)
        if (manageResult) {
            await ctx.render('success.ejs', {
                data:JSON.stringify('修改信息成功!')
            })
        }else {
            await ctx.render('fail.ejs', {
                message: JSON.stringify('修改信息失败!')
            })
        }
    },

    // 退出
    async signOut(ctx, next) {
        ctx.session=null
        if (ctx.session){
            await ctx.render('fail.ejs', {
                message: JSON.stringify('退出失败!')
            })
        }else {
            await ctx.render('success.ejs', {
                data:JSON.stringify('已退出!')
            })
        }
    }
}

module.exports = manager
