var Backbone = require('backbone');
var Registration = require('../components/loginRegistration/registration.jsx')
var Reg = Backbone.Model.extend({
    url:'https://safe-brook-9891.herokuapp.com/api/users/',
    intialize: function(){
    	console.log('test')
    },
    validate: function(attrs){
        if(!attrs.username) {
                $('#user').html('Username is required');
        }
        if(!attrs.firstName) {
                $('#firstName').html('First Name is required');
        }
        if(!attrs.password) {
                $('#pass').html('Password is required');
        }
        
    }

})

module.exports = Reg;