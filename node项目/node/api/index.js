var userRouter=require('./user')
var goodsRouter=require('./goods')
var yuanRouter=require('./yuangong')
var cardRouter=require('./card')
var objRouter={
    '/user':userRouter,
    '/goods':goodsRouter,
    '/yuangong':yuanRouter,
    '/card':cardRouter
}

module.exports=objRouter;