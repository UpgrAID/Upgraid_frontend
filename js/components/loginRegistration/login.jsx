var React =require('react');
var ReactDOM = require('react-dom')
var User = require('../../models/user');
var Backbone = require('backbone');
var Navbar = require('../navbar.jsx');
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
			setToken(resp.token);

			router.navigate('profile/' + username, {trigger:true});


		})
	},
	_reg: function(e) {
		e.preventDefault();
		ReactDOM.render(<Registration/>,document.getElementById('register'));
		$('#register').show();
	},
	render: function() {
		return(
			<div>
				<Navbar />
				<h1>UpgrAid</h1>
			<div id="loginContainer">
			<h1>Login</h1>
				<form id="loginForm" method='POST' onSubmit={this._submit}>
					<div id="inputContainer">
						<div className='valContain'>
						<label id="user"></label>
						<input id="username" className="loginInput" value="thomas1117" nplaceholder="username"/>
						</div>
						<div className='valContain'>
						<label id="pass"></label>
						<input id="password" className="loginInput" value="1234567q" placeholder="password" type="password"/>
						</div>
						<button id="submitLog" type="submit">Submit</button>
						<button  id="registerBtn" onClick={this._reg}>Register</button>

					</div>
				</form>
			</div>
		</div>
			)
	}
})

module.exports= Login;

function setToken(token) {
	var backboneSync = Backbone.sync;
	Backbone.sync = function(method,model,options) {
		options.headers = {
			'Authorization': 'Token ' + token
		};

		backboneSync(method,model,options);
	};
}
