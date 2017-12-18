'use strict'

const request = require('supertest')
const _ = require('lodash')
let res
module.exports = (app, method, path, status, callback, done) => {
  request(app)[method](path)
    .expect(status)
    .then(res => {
      this.res = res
      callback(res)
      done()
    })
    .catch(err => {
      done(new Error(`${err.message}
        errorCode:${_.has(res, 'errorCode') ? res.errorCode : 500}
        errorMessage:${_.has(res, 'errorMessage') ? res.errorMessage : '에러메세지가 없습니다.'}`))
    })
}
