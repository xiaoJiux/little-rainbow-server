const Router = require('koa-router')
const router = new Router()

// 用户接口
router.use('/user', require('./user/index'))

module.exports = router
export {}
