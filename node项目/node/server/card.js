var db = require('./../db/db')
var card = {
    add_yearcard(req, res) {
        db.insert('year_card', req.body, function (e) {
            res.send(e)
        })
    },
    add_chucuncard(req, res) {
        db.insert('chucun_card', req.body, function (e) {
            res.send(e)
        })
    },
    select_yuangongxiaoshou(req, res) {
        db.selectWhere('yuangong', {
            post: req.body['post']
        }, function (e) {
            res.send(e);
        });
    }
}
module.exports = card