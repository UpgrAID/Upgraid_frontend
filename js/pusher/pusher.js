var Pusher = require('pusher');

Pusher.log = function(message) {
      if (window.console && window. ) {
        window. (message);
      }
    };


var pusher = new Pusher('ba2dd22aafcc637cf7e7', {
  authEndpoint: ""
});

var channel = pusher.subscribe('test_channel');

module.exports = PusherConf;
