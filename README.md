# nuritest

supertest를 기반으로 사용되는 테스트코드를 기반으로 만들어진 테스트 입니다.<br/>
 - 함수화를 하여 좀 더 간편한 사용 가능
 - (주)누리고에 최적화된 Error Catch

### Installation

```
$ npm install nuritest
```

### Usage

#### 기존의 supertest

```javascript
it('Title', done => {
  request(app)
    .get('path')
    .expect(statusCode)
    .end((res, err) => {
      //Too
      done()
    })
})
```

#### (주)누리고에 최적화된 nuritest

```javascript
it('apiSecret을 가져오는 기능 테스트', done => {
  nuriTest(app, 'method', 'path', statusCode,
    (res, err) => {
      //Todo
    }, done)
})
```