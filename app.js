const path = require('path')
const Koa = require('koa')
const views = require('koa-views')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')

const config = require('./config')
const routers = require('./routers/index')

const app = new Koa()

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', `${config.serverHost}:3000`);
    ctx.set("Access-Control-Allow-Credentials", true);
    ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
    await next()
})

// session存储配置
const sessionMysqlConfig= {
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    host: config.database.HOST,
}

// 配置session中间件
app.use(session({
    key: 'SESSION_ID',
    store: new MysqlStore(sessionMysqlConfig)
}))

// 配置ctx.body解析中间件
app.use(bodyParser())

// 配置静态资源加载中间件
// app.use(convert(koaStatic(
//     path.join(__dirname , './../static')
// )))

// 配置服务端模板渲染引擎中间件
app.use(views('./views', {
    extension: 'ejs'
}))

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

// 监听启动端口
app.listen( config.port )
console.log(`the server is start at port ${config.port}`)