const express = require('express');
const auth = require('./../middleware/auth');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const users = require('./../controllers/users');
const details = require('./../controllers/details');

// Route api user login 
router.post('/user/login', [
    check('username').not().isEmpty().withMessage('Name is required'),
    check('password', 'Password is required').not().isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    } else {
      users.Login(req, res);
    }
  }
);
// Route api user validate is login 
router.post('/user/validate', (req, res)=>{
  res.json({success:true});
});

router.post('/details/resumen',(req, res)=>{
  details.resumen(req, res);
});
router.post('/details/indications',(req, res)=>{
  details.indications(req, res);
});
router.post('/details/list', auth.isAuthorized,(req, res)=>{
  details.list(req, res);
});

module.exports = router;
