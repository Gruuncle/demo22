var mysql = require('mysql');
var dbconfig = require('./db_config');

var pool = mysql.createPool(dbconfig);

var query = (sql, callback) => {
    pool.getConnection(function (err, conn) {
        if (err) {
            console.log('error')
            return;
        } else {
            conn.query(sql, function (err, res) {
                if (err) {
                    console.log('sql error')
                }
                callback(res)
            });
        }

    })
}
// query('select * from user', function (data) {
//     console.log(data);
// })
function formatt_data(code, msg, data = []) {
    var obj = {
        code,
        msg,
        data
    }
    // var json=`{code:${code},msg:${msg},data:${data}}`
    var json = JSON.stringify(obj)
    return json;
}


// 新增数据
function insert(tabname, data, callback) {
    let keys = '';
    let values = '';
    for (let i in data) {
        keys += i + ',';
        values += `'${data[i]}'` + ","
    }
    keys = keys.substring(0, keys.length - 1);
    values = values.substring(0, values.length - 1);
    var sql = `insert into \`${tabname}\`(${keys}) values (${values})`;
    console.log(sql);
    query(sql, function (res) {
        var json = '';
        if (res) {
            json = formatt_data(0, '新增数据成功')
        } else {
            json = formatt_data(1, '新增失败')
        }
        callback(json)
    })
}

// 新增数据
function insert_(tabname, data, callback) {
    let keys = '';
    let values = '';
    for (let i in data) {
        keys += i + ',';
        values += `'${data[i]}'` + ","
    }
    keys = keys.substring(0, keys.length - 1);
    values = values.substring(0, values.length - 1);
    var sql = `insert into \`${tabname}\`(${keys}) values (${values})`;
    console.log(sql);
    query(sql, function (res) {
        var json = '';
        let json1 = '';
        if (res) {
            lastId('user', function (e) {
                console.log(e);
               
                var ee = JSON.stringify(e)
                var eee=ee.split(':')[1].split('}')[0]
                // json1 = `{"code":0,'msg':'新增成功','data':[${eee}]}`
                json1 = formatt_data(0, '新增成功',eee)
                // console.log('aaaaaaa')
                callback(json1)
            })
            console.log(json1)
            json = json1
        } else {
            json = formatt_data(1, '新增失败')
        }
        // callback(json)
    })
}

function lastId(tabname,callback) {
    var sql = `select max(id) from \`${tabname}\``;
    query(sql, function (res) {
        var json = '';
        if (res) {
            json = res
        } else {
            json = formatt_data(1, '查询失败')
        }
        callback(json)
        // console.log(json)
        // return json;
    })
}

// 根据会员姓名 模糊查询会员
function like_where(tabname, data, callback) {
    // console.log(data)
    let where_ = ''
    for (var i in data) {
        where_ += `${i} like '%${data[i]}%'`
    }
    // where_ += '1';
    let sql = `select * from \`${tabname}\` where ${where_}`
    console.log(sql)
    query(sql, function (res) {
        // console.log(res)
        var json = '';
        if (res) {
            json = formatt_data(0, '数据查询成功', res)
        } else {
            json = formatt_data(1, '查询失败', )
        }
        callback(json)
    })
}

// 查询数据
function select(tabname, callback) {
    var sql = `select * from \`${tabname}\``;
    query(sql, function (res) {
        console.log(res)
        var json = '';
        if (res) {
            json = formatt_data(0, '新增数据成功', res)
        } else {
            json = formatt_data(1, '新增失败', )
        }
        callback(json)
    })
}

// 查询数据2
function select2(tabname, callback,to,from) {
    var offset = (to - 1)*from;
    var sql = `select * from \`${tabname}\` limit ${offset},${from}`;
    console.log(sql)
    query(sql, function (res) {
        console.log(res)
        var json = '';
        if (res) {
            json = formatt_data(0, '新增数据成功', res)
        } else {
            json = formatt_data(1, '新增失败', )
        }
        callback(json)
    })
    console.log(to)
    console.log(from)
}
// 双表联查
function selectTwo(tabname1, tabname2, callback) {
    var sql = `SELECT a.id,a.goods_name,a.goods_price,a.goods_num,a.goods_state,a.add_time,b.type_name as tname from \`${tabname1}\` a JOIN \`${tabname2}\` b on a.goods_type=b.id ORDER by a.id DESC`;
    console.log(sql);
    query(sql, function (res) {
        // console.log(res)
        var json = '';
        if (res) {
            json = formatt_data(0, '查询数据成功', res)
        } else {
            json = formatt_data(1, '查询失败', )
        }
        callback(json)
    })
}


// 分页双表联查
function selectTwo2(tabname1, tabname2, callback,aa) {
    var offset = (aa - 1)*5;
    var sql = `SELECT a.id,a.goods_name,a.goods_price,a.goods_num,a.goods_state,a.add_time,b.type_name as tname from \`${tabname1}\` a JOIN \`${tabname2}\` b on a.goods_type=b.id ORDER by a.id DESC LIMIT ${offset},5`;
    console.log(sql);
    query(sql, function (res) {
        // console.log(res)
        var json = '';
        if (res) {
            json = formatt_data(0, '查询数据成功', res)
        } else {
            json = formatt_data(1, '查询失败', )
        }
        callback(json)
    })
}
// 查询员工
function selectcard_xiaoshou(tabname1, tabname2, callback) {
    var sql = `SELECT a.id,a.goods_name,a.goods_price,a.goods_num,a.goods_state,a.add_time,b.type_name as tname from \`${tabname1}\` a JOIN \`${tabname2}\` b on a.goods_type=b.id ORDER by a.id DESC`;
    console.log(sql);
    query(sql, function (res) {
        // console.log(res)
        var json = '';
        if (res) {
            json = formatt_data(0, '查询数据成功', res)
        } else {
            json = formatt_data(1, '查询失败', )
        }
        callback(json)
    })
}


function selectWhere(tabname, data, callback) {
    let where_ = ''
    for (var i in data) {
        where_ += `${i}='${data[i]}' and `
    }
    where_ += '1';
    let sql = `select * from \`${tabname}\` where ${where_}`
    console.log(sql)
    query(sql, function (res) {
        console.log(res)
        var json = '';
        if (res) {
            json = formatt_data(0, '数据查询成功', res)
        } else {
            json = formatt_data(1, '查询失败', )
        }
        callback(json)
    })
}

function delete_(tabname, data, callback) {
    console.log(data)
    let where_ = ''
    for (var i in data) {
        where_ += `${i}='${data[i]}' and `
    }
    where_ += '1';
    let sql = `delete from \`${tabname}\` where ${where_}`
    console.log(sql)
    query(sql, function (res) {
        // console.log(res)
        var json = '';
        if (res) {
            json = formatt_data(0, '数据删除成功', res)
        } else {
            json = formatt_data(1, '删除失败', )
        }
        callback(json)
    })
}

function updata_(tabname, data, callback) {
    console.log(data)
    let where_ = ''
    let up = '';
    for (var i in data) {
        if (i == 'id') {
            where_ = `${i}='${data[i]}'`
        } else {
            up += `${i}='${data[i]}',`
        }
    }
    let up_ = up.substring(0, up.length - 1);
    let sql = `update \`${tabname}\` set ${up_} where ${where_}`
    console.log(sql)
    query(sql, function (res) {
        // console.log(res)
        var json = '';
        if (res) {
            json = formatt_data(0, '数据修改成功', res)
        } else {
            json = formatt_data(1, '修改失败', )
        }
        callback(json)
    })
}


function selectall(){
    
}
module.exports = {
    insert,
    select,
    select2,
    selectWhere,
    delete_,
    updata_,
    selectTwo,
    selectcard_xiaoshou,
    like_where,
    insert_,
    selectall,
    selectTwo2
}