var React = require('react');
var FriendRequest = require('../profilePage/friends/friendRequest.jsx');
var SearchUsers = require('./searchUsers.jsx')

var Nav = React.createClass({
	
	_profileNav: function(e){
		var router =this.props.router;
		router.navigate('profile/' + this.props.username, {trigger:true});
	},
	render:function(){
		return(<div>
				<div id='navContainer'>
					<ul id="navUl">
						<li className="mainLi" onClick={this._profileNav}>Profile</li>
						<li className="mainLi">Group</li>
						<li><SearchUsers users={this.props.users} filterList = {this.props.filterList}/></li>
						<li id="friendLi" className="mainLi">
							<span id="square"></span>
							<FriendRequest userID={this.props.uid} fromAll={this.props.fromAll}/>
						</li>
					</ul>

				</div>
				<div id="header"></div>
				</div>)
	}
});

module.exports = Nav;