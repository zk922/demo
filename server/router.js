const KoaRouter = require('koa-router');

let router = new KoaRouter();



const exportExcel = require('./mws/export-excel');
router.get('/api/export-excel', exportExcel);



module.exports = router.routes();
