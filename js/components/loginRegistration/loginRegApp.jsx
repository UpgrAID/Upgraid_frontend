var React = require('react');

var Login = require('./login.jsx');
var Registration = require('./registration.jsx');

var LoginRegApp = React.createClass({
	getInitialState:function(){
		return({
			hidden: true
		});
	},
//show/hide registration window
	_show: function(){
		this.setState({
			hidden:false
		})


	},
	_hide: function(){
		this.setState({
			hidden: true
		});
		console.log('test')
	},
	//fades to profile page
	_hideBigPic: function(){
		$('#bigPic').fadeOut(1000);
	},
	render:function(){
		return(
			<div>
				<div id="bigPic">
					<h2 id="splashText1">improving yourself is tough enough.</h2>
					<h2 id="splashText2">let&#39;s do it together.</h2>
					<h1 id="bigTitle">UpgrAID</h1>
				<Login router={this.props.router} show={this._show} logIn={this._hideBigPic}/>
				<Registration hide={this._hide} hidden={this.state.hidden}/>
				</div>
			</div>
			)
	}
});

module.exports = LoginRegApp;
