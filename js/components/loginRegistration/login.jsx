var React =require('react');
var ReactDOM = require('react-dom')
var User = require('../../models/user');
var Backbone = require('backbone');
var Cookie = require('jquery.cookie');
// var Reg = require('../../models/registration');

var Registration = require('./registration.jsx');

var test = new User();

var Login = React.createClass({

	_submit: function(e) {
		var router =this.props.router;
		var self = this.props;
		e.preventDefault();
		var username = $("#username").val();
		var password = $("#password").val();

		//intial ajax call to set authorization token for future api requests
		$.ajax({
			url:'https://safe-brook-9891.herokuapp.com/api/api-token-auth/',
			method:'POST',
			data: {username: username, password:password}

		}).then(function(resp){

			setToken(resp.token);

			self.logIn();

			router.navigate('profile/' + username, {trigger:true});
		})

	},
	// opens user registration window
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
//Backbone.sync to set/save auth token for future api calls
	var _sync = Backbone.sync;
	Backbone.sync = function(post,model,options) {

		options.headers = {
			'Authorization': 'Token ' + token,
		};

		return _sync.call(this,post,model,options);
	};
};
