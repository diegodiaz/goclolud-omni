module.exports.isAuthorized  = function(req, res, next) {

  const accessTokenFromClient = req.headers.authorization;
 
  if (!accessTokenFromClient) {
    return res.status(401).json({success:false, message: 'Not authorized'});
  }else{
    cognitoExpress.validate(accessTokenFromClient, function (err, response) {
      if (err) {
        return res.status(401).send(err);
      }
      res.locals.user = response;
      next();
    });
  }

  User.findById(req.session.userId).exec(function (error, user) {
      if (error) {
          return next(error);
      } else {      
          if (user === null) {     
              var err = new Error('Not authorized! Go back!');
              err.status = 400;
              return next(err);
          } else {
              return next();
          }
      }
  });
}
