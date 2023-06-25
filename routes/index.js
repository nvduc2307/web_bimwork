const authRouter = require('./auth.router');
const adminRouter = require('./admin.router');
function router(app) {
  app.use('/auth', authRouter);
  app.use('/admin', adminRouter);
}
module.exports = router;
