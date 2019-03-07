var router = require("express").Router();
var card_server = require('./../server/card')
// 添加年卡片
router.post('/add_yearcard', function (req, res) {
   card_server.add_yearcard(req, res)
})
// 添加储存卡片
router.post('/add_chucuncard', function (req, res) {
    card_server.add_chucuncard(req, res)
 })
// 查询所有销售员工
router.post('/select_yuangongxiaoshou', function (req, res) {
    card_server.select_yuangongxiaoshou(req, res)
})

module.exports = router