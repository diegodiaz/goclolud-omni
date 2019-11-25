const express = require('express');
const router = express.Router();

// Route api user login 
router.post('/user/login', (req, res)=>{
  res.json({success:true, token:''});
});
// Route api user validate is login 
router.post('/user/validate', (req, res)=>{
  res.json({success:true});
});

module.exports = router;
