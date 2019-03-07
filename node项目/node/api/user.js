var router=require("express").Router();
var user_server=require('./../server/user')
// 添加会员
router.post('/add_user',function(req,res){
   user_server.add_user(req,res)
})
// 根据会员名称模糊查询会员
router.post('/like_user',function(req,res){
  user_server.like_user(req,res)
})
// 修改会员
router.post('/updata_user',function(req,res){
  user_server.updata_user(req,res)
})
// 根据id查询会员
router.post('/selectuserbyid',function(req,res){
  user_server.selectuserbyid(req,res)
})
// 添加会员详细信息
router.post('/add_userinfo',function(req,res){
  user_server.add_userinfo(req,res)
})
// 根据id查询会员车辆
router.post('/selectcarbyid',function(req,res){
  user_server.selectcarbyid(req,res)
})
// 根据用户id添加车辆
router.post('/inster_usercar',function(req,res){
  user_server.inster_usercar(req,res)
})
// 根据id查询用户车辆
router.post('/selectusercarbyid',function(req,res){
  user_server.selectusercarbyid(req,res)
})
// 根据用户id修改用户车辆
router.post('/updata_usercar',function(req,res){
  user_server.updata_usercar(req,res)
})
// 删除用户车辆
router.post('/delecd_usercar',function(req,res){
  user_server.delecd_usercar(req,res)
})
// 根据id查询用户储存卡
router.post('/selectcunxucardbyid',function(req,res){
  user_server.selectcunxucardbyid(req,res)
})
// 根据用户id添加储存卡
router.post('/inster_userchucuncard',function(req,res){
  user_server.inster_userchucuncard(req,res)
})
// 根据id修改用户储值卡
router.post('/updata_chucuncard',function(req,res){
  user_server.updata_chucuncard(req,res)
})
// 根据id删除用户储值卡
router.post('/delecd_chucuncard',function(req,res){
  user_server.delecd_chucuncard(req,res)
})
// 根据id查询用户年卡
router.post('/selectyearcardbyid',function(req,res){
  user_server.selectyearcardbyid(req,res)
})
// 根据用户id添加年卡
router.post('/inster_useryearcard',function(req,res){
  user_server.inster_useryearcard(req,res)
})
router.post('/selectall',function(req,res){
  user_server.selectall(req,res)
})
module.exports=router