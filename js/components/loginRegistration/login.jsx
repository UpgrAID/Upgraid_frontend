var React =require('react');
var ReactDOM = require('react-dom')
var User = require('../../models/user');
var Backbone = require('backbone');
var Cookie = require('jquery.cookie');
// var Reg = require('../../models/registration');

var Registration = require('./registration.jsx');

var test = new User();

var Login = React.createClass({
	
    _handleInputChange: function(e){
        e.preventDefault();

    },
    _close: function(e) {
        $('#registrationContainer').hide();
    },
	_submit: function(e) {
		var router =this.props.router;
		e.preventDefault();
		var username = $("#username").val();
		var password = $("#password").val();

		$.ajax({
			url:'https://safe-brook-9891.herokuapp.com/api/api-token-auth/',
			method:'POST',
			data: {username: username, password:password}
		}).then(function(resp){

			$.cookie('AuthToken',resp.token);
			setToken(resp.token)

			router.navigate('profile/' + username, {trigger:true});
		})

	},
	 _reg: function(e) {
	 	this.props.show()
	},
	render: function() {
		return(
			<div id="loginPageWrapper">
				<div id="loginContainer">
				<span id="logoSpan">UpgrAID</span>
				<div id="loginOnly">
					
					<span id="loginSpan">Login</span>
						<form id="loginForm" method='POST' onSubmit={this._submit}>
							<div id="inputContainer">
								<div className="inputWindow">
									<input id="username" className="loginInput"  placeholder="username" />
								</div>
								<div className="inputWindow">
									<input id="password" className="loginInput"  placeholder="password" type="password" />
								</div>
								<button id="submitLog" type="submit">Submit</button>
								
							</div>
						</form>
						<button id="registerBtn" onClick={this._reg}>Register</button>
					</div>
				</div>
				<div id="bigPic">
					<div id="home-wrapper">

					<h1 id="bigTitle">Welcome to UpgrAID</h1>
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
		if($.cookie('AuthToken')) {
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
