const authRouter = require('./auth.router');
function router(app) {
  app.use('/auth', authRouter);
}
module.exports = router;
