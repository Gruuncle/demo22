var router = require("express").Router();
var yuan_server = require('./../server/yuangong')
// 添加员工
router.post('/add_yuangong', function (req, res) {
    yuan_server.add_yuangong(req, res)
})
// 查询所有岗位分类
router.post('/select_wangweitype', function (req, res) {
    yuan_server.select_wangweitype(req, res)
})
// 查询所有员工
router.post('/select_yuangong', function (req, res) {
    yuan_server.select_yuangong(req, res)
})
// 根据条件查询员工
router.post('/select_yuangongstate', function (req, res) {
    yuan_server.select_yuangongstate(req, res)
})
// 根据id查询员工
router.post('/select_yuangongbyid', function (req, res) {
    yuan_server.select_yuangongbyid(req, res)
})
// 修改员工信息
router.post('/updata_yuangong', function (req, res) {
    yuan_server.updata_yuangong(req, res)
 })


module.exports = router