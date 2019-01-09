const xlsx = require('node-xlsx');

/**
 * 导出excel的示例后台部分
 * **/
module.exports = async function (ctx, next) {
  const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
  let buffer = xlsx.build([{name: "mySheetName", data: data}]);
  ctx.response.set('Content-Type', 'application/octet-stream');
  ctx.body = buffer;
  ctx.status = 200;
  await next();
};
