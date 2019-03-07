var db = require('./../db/db')
var user = {
    add_user(req, res) {
        console.log(req.body)
        db.insert_('user', req.body, function (e) {
            // console.log(e)
            res.send(e)
        })
    },
    add_userinfo(req, res) {
        db.insert('user_car', req.body, function (e) {
            // console.log(e)
            res.send(e)
        })
    },
    like_user(req, res) {
        db.like_where('user', {
            username: req.body['username']
        }, function (e) {
            res.send(e)
        })
    },
    updata_user(req, res) {
        db.updata_('user', req.body, function (e) {
            res.send(e)
        })
    },
    selectuserbyid(req, res) {
        db.selectWhere('user', {
            id: req.body['id']
        }, function (e) {
            res.send(e);
        });
    },
    selectcarbyid(req, res) {
        console.log(req.body)
        db.selectWhere('user_car', {
            user_id: req.body['id']
        }, function (e) {
            res.send(e);
        });
    },
    inster_usercar(req, res) {
        db.insert('user_car', req.body, function (e) {
            res.send(e)
        })
        // console.log(req.body);
    },
    inster_userchucuncard(req, res) {
        db.insert('chucun_card', req.body, function (e) {
            res.send(e)
        })
        // console.log(req.body);
    },
    selectusercarbyid(req, res) {
        db.selectWhere('user_car', {
            id: req.body['id']
        }, function (e) {
            res.send(e);
        });
    },
    updata_usercar(req, res) {
        db.updata_('user_car', req.body, function (e) {
            res.send(e)
        })
    },
    delecd_usercar(req, res) {
        db.delete_('user_car', {
            id: req.body['id']
        }, function (e) {
            res.send(e)
        })
    },
    selectcunxucardbyid(req, res) {
        db.selectWhere('chucun_card', {
            user_id: req.body['id']
        }, function (e) {
            res.send(e);
        });
    },
    updata_chucuncard(req, res) {
        db.updata_('chucun_card', req.body, function (e) {
            res.send(e)
        })
    },
    delecd_chucuncard(req, res) {
        db.delete_('chucun_card', {
            id: req.body['id']
        }, function (e) {
            res.send(e)
        })
    },
    selectyearcardbyid(req, res) {
        db.selectWhere('year_card', {
            user_id: req.body['id']
        }, function (e) {
            res.send(e);
        });
    },
    inster_useryearcard(req, res) {
        db.insert('year_card', req.body, function (e) {
            res.send(e)
        })
        // console.log(req.body);
    },
    selectall(req,res){
        db.selectall()
    }
    // searchlist(req, res) {
    //     db.select('type', function (e) {
    //         res.send(e)
    //     })
    // },
    // selectByFid(req, res) {
    //     db.selectWhere('type', { fid: req.body['fid_'] }, function(e) {
    //         res.send(e);
    //     });
    // },
    // add_news(req, res){
    //     db.insert('article', req.body, function (e) {
    //         res.send(e)
    //     })
    // },
    // searchallnewslist(req, res){
    //     db.select('article', function (e) {
    //         res.send(e)
    //     })
    // },
    // del_news(req,res){
    //     db.delete_('article', {id:req.body['id']},function (e) {
    //         res.send(e)
    //     })
    // },
    // selectByNewid(req,res){
    //     db.selectWhere('article', { id: req.body['id'] }, function(e) {
    //         res.send(e);
    //     });
    // },
    // updata_news(req,res){
    //     db.updata_('article',req.body,function(e){
    //         res.send(e)
    //     })
    // },

}
module.exports = user