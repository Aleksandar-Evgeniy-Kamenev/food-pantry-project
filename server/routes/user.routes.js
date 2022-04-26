const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controller');
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });
  // add restrictions
  app.get('/api/test/all', controller.allAccess);
  app.get('/api/test/user', [authJwt.verifyToken], controller.userBoard);
  app.get(
    '/api/test/donor',
    [authJwt.verifyToken, authJwt.isDonor],
    controller.donorBoard
  );
  app.get(
    '/api/test/receiver',
    [authJwt.verifyToken, authJwt.isReceiver],
    controller.receiverBoard
  );
  app.get(
    '/api/test/courier',
    [authJwt.verifyToken, authJwt.isCourier],
    controller.couriorBoard
  );
  app.get(
    '/api/test/admin',
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
