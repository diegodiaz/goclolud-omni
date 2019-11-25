global.fetch = require('node-fetch');

const REGION = "ap-southeast-2";
const USER_ID = "ap-southeast-2_kaJ2Dt2HG";
const APP_ID = "5om70h22nll3nshn3jl2il825u";

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

exports.Login = (req, res, next) => {

  // Caputramos los datos de request
  const {body} = req;
  const Username = body.username;
  const Password = body.password;

  // Preparamos la estructura y datos a enviar
  const poolData = {
    UserPoolId: USER_ID,
    ClientId: APP_ID
  };
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  const userData = {
    Username,
    Pool: userPool
  };
  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
    Username,
    Password,
  });
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  // Enviamos a verificar las credenciales
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      var accesstoken = result.getAccessToken().getJwtToken();
      res.json({success:true, token:accesstoken});
    },
    newPasswordRequired: function (userAttributes){
      delete userAttributes.email_verified;
      cognitoUser.completeNewPasswordChallenge(Password, {}, this);
      res.json({success:false, code: 2, message: "New password is required"});
    },
    onFailure: (function (err) {
      res.json({success:false});
      console.log(err);
    })
  });

  

}
