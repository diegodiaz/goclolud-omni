var AWS = require('aws-sdk');
AWS.config.update({region: "ap-southeast-2"});

exports.resumen = (req, res) => {
  try {

    var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
    
    var params = {
      TableName: 'Dummy',
      Key: {
        'Id': {N: '001'}
      }
    };
    
    // Call DynamoDB to read the item from the table
    ddb.getItem(params, function(err, data) {
      if (err) {
        res.json({success: false});
      } else {
        res.json({success: true, data: data.Item});
      }
    });

  }catch(err) {
    console.log(err);
    res.json({success: false});
  }

}

exports.indications = (req, res) => {
  try {

    var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
    
    var params = {
      TableName: 'Dummy',
      Key: {
        'Id': {N: '001'}
      }
    };
    
    // Call DynamoDB to read the item from the table
    ddb.getItem(params, function(err, data) {
      if (err) {
        res.json({success: error});
      } else {
        res.json({success: true, data: data.Item});
      }
    });

  }catch(err) {
    console.log(err);
    res.json({success: false});
  }

}

exports.list = (req, res) => {
  try {

    var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
    
    var params = {
      TableName: 'Details',
    };
    
    ddb.scan(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        res.json({success: true, data: data.Items});
      }
    });

  }catch(err) {
    console.log(err);
    res.json({success: false});
  }

}