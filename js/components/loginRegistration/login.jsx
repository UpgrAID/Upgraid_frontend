var React =require('react');
var ReactDOM = require('react-dom')
var User = require('../../models/user');
var Backbone = require('backbone');
var Cookie = require('jquery.cookie');

var Registration = require('./registration.jsx');

var test = new User();

var Login = React.createClass({
	_submit: function(e) {
		var router =this.props.router;
		e.preventDefault();
		var username = $("#username").val();
		var password = $("#password").val();

		$.ajax({
			url:'https://safe-brook-9891.herokuapp.com/api/api-token-auth/',
			method:'post',
			data: {username: username, password:password}
		}).then(function(resp){

			$.cookie('AuthToken',resp.token);
			setToken(resp.token)

			router.navigate('profile/' + username, {trigger:true});
		})
		$("#app").hide();
		$('#bigPic').hide();
	},
	_reg: function(e) {
		e.preventDefault();
		ReactDOM.render(<Registration/>,document.getElementById('register'));
		$('#register').show();
	},
	render: function() {
		return(
			<div id="loginPageWrapper">
				<div id="loginContainer">
				<span id="logoSpan">UpgrAID</span>
				<span id="loginSpan">Login</span>
					<form id="loginForm" method='POST' onSubmit={this._submit}>
						<div id="inputContainer">
							<div className="inputWindow">
								<input id="username" className="loginInput"  placeholder="username" value="thomas1117"/>
							</div>
							<div className="inputWindow">
								<input id="password" className="loginInput"  placeholder="password" type="password" value="1234567q"/>
							</div>
							<button id="submitLog" type="submit">Submit</button>
							<button id="registerBtn" onClick={this._reg}>Register</button>
						</div>
					</form>
				</div>
				<div id="bigPic">
					<div id="home-wrapper">
					<p>Please login or register</p>
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

 if($.cookie('auth_token')) {
 	setToken($.cookie('auth_token'))
 }


