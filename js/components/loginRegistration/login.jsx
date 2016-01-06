var React =require('react');
var ReactDOM = require('react-dom')
var User = require('../../models/user');
var Backbone = require('backbone');
var Cookie = require('jquery.cookie');
// var Reg = require('../../models/registration');

var Registration = require('./registration.jsx');

var test = new User();

var Login = React.createClass({

	getInitialState: function(){
		return {
			focused: true,
			username: null,
			password: null
		}
	},

	_regSubmit: function(e) {
        e.preventDefault();
        test.set({
            first_name: $('#firstName').val(),
            username: $('#userName').val(),
            password: $('#passwordReg').val(),
            email: $('#email').val(),
        })
       test.save(null,{
        success: function(resp) {

        },
        error: function(err){
        	$('#error').html("There was an error--please try again");
        }

       })
    },
    _handleUsernameChange: function(e){
      e.preventDefault();
      this.setState({username: e.target.value});
    },
    _handlePasswordChange: function(e){
    	e.preventDefault();
    	this.setState({password: e.target.value});
    },

    _close: function(e) {
        $('#registrationContainer').hide();
    },
	_submit: function(e) {
		var router =this.props.router;
		var self = this.props;
		e.preventDefault();
		var username = $("#username").val();
		var password = $("#password").val();

		$.ajax({
			url:'https://safe-brook-9891.herokuapp.com/api/api-token-auth/',
			method:'post',
			data: {username: username, password:password}
		}).then(function(resp){

			$.cookie('AuthToken',resp.token);
			setToken(resp.token);

			self.logIn();

			router.navigate('profile/' + username, {trigger:true});
		})

	},
	 _reg: function(e) {
	 	e.preventDefault();
	 	this.props.show();
	},
	render: function() {
		return(
			<div id="loginPageWrapper">
				<div id="loginContainer">
				<div id="loginOnly">

						<form id="loginForm" method='POST' onSubmit={this._submit}>
							<div id="inputContainer">
								<div id="loginSpan">Login</div>

								<div className="inputWindow">
									<input id="username"
									className="loginInput"
									autofocus="true"
									placeholder="username"
									onChange={this._handleUsernameChange} />
								</div>

								<div className="inputWindow">
									<input id="password"
									className="loginInput"
									placeholder="password"
									type="password"
									onChange={this._handlePasswordChange} />
								</div>

								<button id="submitLog" type="submit">Log In</button>

							</div>
						</form>
						<button id="registerBtn" onClick={this._reg}>Sign up Today!</button>
					</div>
				</div>
		</div>
			)
	}
})

module.exports= Login;

function setToken(token) {

	var _sync = Backbone.sync;
	Backbone.sync = function(post,model,options) {
		if($.cookie('auth_token')) {
		options.headers = {
			'Authorization': 'Token ' + token,
		};
	}



		return _sync.call(this,post,model,options);
	};
}

 if($.cookie('AuthToken')) {
 	setToken($.cookie('AuthToken'))
 }
