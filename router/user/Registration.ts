import Router = require("koa-router");
const router = new Router ()

router.get('/login',ctx =>{
  ctx.body = 2222
})


module.exports = router.routes()
