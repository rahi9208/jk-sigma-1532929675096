let AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    console.log("Hello Chathura Update");
    callback(null,'Successfully executed');
}