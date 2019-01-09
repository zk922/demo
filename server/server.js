const Koa = require('koa');
const koaStatic = require('koa-static');
const bodyparser = require('koa-bodyparser');
const cp = require('child_process');

const router = require('./router');

const path = require('path');

let app = new Koa();

app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}));
app.use(koaStatic(path.resolve(__dirname, '../www'), {
  maxage: 7 * 24 * 3600 * 1000
}));

app.use(router);

app.listen(8888, function () {
  console.log('server started at port 8888');
  cp.exec('explorer http://localhost:8888')
});
