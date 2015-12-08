var React =require('react');
var User = require('../../models/user');
var Backbone = require('backbone');

var test = new User();

var Login = React.createClass({
	_submit: function(e) {
		e.preventDefault();
		var username = $("#username").val();
		var password = $("#password").val();

		$.ajax({
			url:'https://safe-brook-9891.herokuapp.com/api/api-token-auth/',
			method:'post',
			data: {username: username, password:password}
		}).then(function(resp){
			console.log(resp);
			setToken(resp.token);
			router.navigate('profile/' + username, {trigger:true});
			
			
		})
	},
	render: function() {
		return(
			<div id="loginContainer">
			<h1>Login</h1>
				<form id="loginForm" method='POST' onSubmit={this._submit}>
					<div id="inputContainer">
						<div className='valContain'>
						<label id="user"></label>
						<input id="username" className="loginInput" placeholder="username"/>
						</div>
						<div className='valContain'>
						<label id="pass"></label>
						<input id="password" className="loginInput" placeholder="password" type="password"/>
						</div>
						<button id="submitLog" type="submit">Submit</button>

					</div>
				</form>
			</div>
			)
	}
})

module.exports= Login;

function setToken(token) {
	var backboneSync = Backbone.sync;
	Backbone.sync = function(method,model,options) {
		options.headers = {
			'Authorization': 'Bearer' + token
		};

		backboneSync(method,model,options);
	};
}