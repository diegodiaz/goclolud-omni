const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

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
      res.send({});
    }
  }
);
// Route api user validate is login 
router.post('/user/validate', (req, res)=>{
  res.json({success:true});
});

module.exports = router;
