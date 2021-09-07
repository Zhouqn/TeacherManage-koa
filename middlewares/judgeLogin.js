
//前端验证登录
exports.judge = async (ctx, next) => {
    //session方法
    if(ctx.session) {
        if (ctx.session.user_id) {
            await ctx.render('auth.ejs', {
                isLogin:true,
                message: JSON.stringify("登录成功！")
            })
        }else {
            await ctx.render('auth.ejs', {
                isLogin:false,
                message: JSON.stringify("未登录，请先登录！")
            })
        }
    }else {
        await ctx.render('auth.ejs', {
            isLogin:false,
            message: JSON.stringify("未登录，请先登录！")
        })
    }
}

