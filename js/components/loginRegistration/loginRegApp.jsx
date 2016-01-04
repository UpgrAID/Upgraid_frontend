var React = require('react');

var Login = require('./login.jsx');
var Registration = require('./registration.jsx');

var LoginRegApp = React.createClass({
	getInitialState:function(){
		return({
			hidden: true
		});
	},
	
	_show: function(){
		this.setState({
			hidden:false
		})
		
		
	},
	_hide: function(){
		this.setState({
			hidden: true
		})
	},
	render:function(){
		return(
			<div>
				<Login router={this.props.router} show={this._show} />
				<Registration hide={this._hide} hidden={this.state.hidden}/>
			</div>
			)
	}
});

module.exports = LoginRegApp;