const Koa = require('koa');
const app = new Koa();
/*处理post请求中间件*/
const { koaBody } = require('koa-body');
// 静态文件
const serve = require("koa-static");
const router = require('./router/index')

app.use(serve(__dirname))
app.use(router.routes())
    .use(router.allowedMethods())
    .use(koaBody())
app.listen(3000);
