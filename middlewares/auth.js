
//后端验证登陆
exports.auth = async (ctx, next) => {
    //session方法
    if(ctx.session) {
        if (ctx.session.user_id) {
            await next()

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

