/**
 * Created by Administrator on 2017-07-13.
 */
var mysql = require('mysql')
var pool = mysql.createPool({
  host: '123.206.56.48',
  port: '3306',
  user: 'test',
  password: 'test',
  database: 'qq',
})

var query = function (sql, callback) {
  pool.getConnection(function (err, conn) {
    if (err) {
      console.log('链接出错')
      callback(err, null, null)
    } else {
      conn.query(sql, function (qerr, vals, fields) {
        //释放连接
        conn.release()
        //事件驱动回调
        callback(qerr, vals, fields)
      })
    }
  })
}

module.exports = query
