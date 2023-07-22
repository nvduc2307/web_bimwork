const authRouter = require('./auth.router');
const adminRouter = require('./admin.router');
const siteRouter = require('./site.router');
function router(app) {
  app.use('/auth', authRouter);
  app.use('/admin', adminRouter);
  app.use('/', siteRouter);
}
module.exports = router;
