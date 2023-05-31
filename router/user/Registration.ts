import Router = require("@koa/router");
import "koa-body/lib/index";
const router = new Router()
router.post('/reg', (ctx) => {
  let data = ctx.request.body
})
router.get('/login', (ctx) => {
  let data = ctx.query
  ctx.body = {
    code: 200,
    data: '6666',
  }
})

module.exports = router.routes()

export {}
