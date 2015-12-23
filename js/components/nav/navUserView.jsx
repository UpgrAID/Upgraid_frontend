var React = require('react');


var NavUserView = React.createClass({
	_profileNav: function(e){
		var router =this.props.router;
		router.navigate('profile/' + this.props.username, {trigger:true});
	},
	render:function(){
		return(<div id='navContainerUser'>
					<ul id="navUlUser">
						<li onClick={this._profileNav}>Profile</li>
						<li>Group</li>
					</ul>
					<div id="header"></div>
				</div>)
	}
});

module.exports = NavUserView;