var router = require("express").Router();
var goods_server = require('./../server/goods')
// 添加商品分类
router.post('/add_goodstype', function (req, res) {
   goods_server.add_goodstype(req, res)
})
// 查询所有商品分类
router.post('/select_goodstype', function (req, res) {
   goods_server.select_goodstype(req, res)
})
// 分页查询商品
router.post('/fenselect_goods', function (req, res) {
   goods_server.fenselect_goods(req, res)
})


// 查询单条商品分类
router.post('/selectbyid', function (req, res) {
   goods_server.selectbyid(req, res)
})
// 根据id删除商品分类
router.post('/del_goodstype', function (req, res) {
   goods_server.del_goodstype(req, res)
})
// 修改商品分类
router.post('/updata_goodstype', function (req, res) {
   goods_server.updata_goodstype(req, res)
})
// 添加商品
router.post('/add_goods', function (req, res) {
   goods_server.add_goods(req, res)
})
// 查询所有商品
router.post('/select_goods', function (req, res) {
   goods_server.select_goods(req, res)
})
// 修改商品状态
router.post('/updata_goods', function (req, res) {
   goods_server.updata_goods(req, res)
})
// 根据id删除商品
router.post('/del_goods', function (req, res) {
   goods_server.del_goods(req, res)
})
// 查询单条商品
router.post('/selectbygoodsid', function (req, res) {
   goods_server.selectbygoodsid(req, res)
})
// 修改商品
router.post('/updata_goods', function (req, res) {
   goods_server.updata_goods(req, res)
})

// 根据id修改商品分类
router.post('/updata_goodstype', function (req, res) {
   goods_server.updata_goodstype(req, res)
})

module.exports = router