var db = require('./../db/db')
var goods = {
    add_goodstype(req, res) {
        console.log(req.body)
        db.insert('goods_type', req.body, function (e) {
            res.send(e)
        })
    },
    select_goodstype(req, res){
        db.select('goods_type', function (e) {
            res.send(e)
        })
    },
    selectbyid(req, res) {
        db.selectWhere('goods_type', { id: req.body['id'] }, function(e) {
            res.send(e);
        });
    },
    del_goodstype(req,res){
        db.delete_('goods_type', {id:req.body['id']},function (e) {
            res.send(e)
        })
    },
    updata_goodstype(req,res){
        db.updata_('goods_type',req.body,function(e){
            res.send(e)
        })
    },
    add_goods(req, res) {
        console.log(req.body)
        db.insert('goods', req.body, function (e) {
            res.send(e)
        })
    },
    select_goods(req, res){
        db.selectTwo('goods','goods_type',function (e) {
            res.send(e)
        })
    },
    updata_goods(req,res){
        db.updata_('goods',req.body,function(e){
            res.send(e)
        })
    },
    updata_goodstype(req,res){
        db.updata_('goods_type',req.body,function(e){
            res.send(e)
        })
    },
    del_goods(req,res){
        db.delete_('goods', {id:req.body['id']},function (e) {
            res.send(e)
        })
    },
    selectbygoodsid(req, res) {
        db.selectWhere('goods', { id: req.body['id'] }, function(e) {
            res.send(e);
        });
    },
    updata_goods(req,res){
        db.updata_('goods',req.body,function(e){
            res.send(e)
        })
    },
    fenselect_goods(req,res){
        db.selectTwo2('goods','goods_type',function (e) {
            res.send(e)
        },req.body.ad)
    }
}
module.exports = goods