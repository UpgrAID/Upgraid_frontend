var React = require('react');
var SearchUsers = require('./searchUsers.jsx');
var FriendRequest = require('../profilePage/friends/friendRequest.jsx');

var MainNav = React.createClass({
	_profileNav: function(e){
		var router =this.props.router;
		router.navigate('profile/' + this.props.username, {trigger:true});
	},
	render:function(){
		return(
			<div id='navContainer'>
				<div id="navContain">
				<ul id="navUl">
					<li className="logo"> UpgrAID</li>
					<li className="mainLi" onClick={this._profileNav}> MyProfile</li>
					<li className="searchBar"><SearchUsers users={this.props.users} doSearch = {this.props.doSearch} query={this.props.query} router={this.props.router}/></li>
					<li id="friendLi" className="mainLi">
						<span id="square" className='entypo-users'></span>
						<FriendRequest userId={this.props.userId} fromAll={this.props.fromAll}/>
					</li>
				</ul>
				</div>
			</div>
			)
	}
});

module.exports = MainNav;