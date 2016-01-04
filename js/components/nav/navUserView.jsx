var React = require('react');
var SearchUsers = require('./searchUsers.jsx')
var AddFriend = require('../userView/addFriend/addFriend.jsx');

var NavUserView = React.createClass({
	_profileNav: function(e){
		var router =this.props.router;
		router.navigate('profile/' + this.props.username, {trigger:true});
	},
	render:function(){

		return(<div>
					<div id='navContainerUser'>
						<ul id="navUlUser">
							<li onClick={this._profileNav}>Profile</li>
							<li>{!this.props.friend ? <AddFriend userId={this.props.userId} myId={this.props.myId}/> : null}</li>
						</ul>

					</div>

				<div id="header"></div>

				</div>
				)
	}
});

module.exports = NavUserView;
