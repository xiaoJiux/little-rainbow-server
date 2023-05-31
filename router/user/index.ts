const Router = require('koa-router')

const router = new Router()

// 登录注册接口
router.use(require('./Registration'))

module.exports = router.routes()

export {}
