var Pusher = require('pusher');

Pusher.log = function(message) {
      if (window.console && window.console.log) {
        window.console.log(message);
      }
    };


var pusher = new Pusher('ba2dd22aafcc637cf7e7', {
  authEndpoint: ""
});

var channel = pusher.subscribe('test_channel');

module.exports = PusherConf;
