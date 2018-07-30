let AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    console.log("Hello ChathuraW");
    callback(null,'Successfully executed');
}