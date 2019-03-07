var db = require('./../db/db')
var yuangong = {
    add_yuangong(req, res) {
        // console.log(req.body)
        db.insert('yuangong', req.body, function (e) {
            res.send(e)
        })
    },
    select_wangweitype(req, res){
        db.select('gangwei', function (e) {
            res.send(e)
        })
    },
    select_yuangong(req, res){
        db.select('yuangong', function (e) {
            res.send(e)
        })
    },
    select_yuangongstate(req, res) {
        db.selectWhere('yuangong', { state: req.body['state'] }, function(e) {
            res.send(e);
        });
    },
    select_yuangongbyid(req, res) {
        db.selectWhere('yuangong', { id: req.body['id'] }, function(e) {
            res.send(e);
        });
    },
    updata_yuangong(req,res){
        db.updata_('yuangong',req.body,function(e){
            res.send(e)
        })
    },
}
module.exports = yuangong