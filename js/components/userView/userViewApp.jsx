var React = require('react');
var OtherPosts= require('../../components/profilePage/post/othersPosts.jsx');
var OtherGoals= require('../../components/profilePage/goalList/othersGoals.jsx');
var Greeting = require('../../components/profilePage/greeting.jsx');
var Nav = require('../../components/nav/nav.jsx');
var AddFriend = require('../userView/addFriend/addFriend.jsx');
var AvatarRankXp = require('../../components/profilePage/avatarRankXp/avatarRankXp.jsx');
var Friends= require('../../components/profilePage/friends/friends.jsx');
var Group= require('../../components/profilePage/groups/groups.jsx');
var UserViewApp = React.createClass({
	render:function() {
		console.log(this.props.friends);
		return(<div>
				<Nav router={this.props.router} username={'thomas1117'}/>
				<Greeting name={this.props.name}/>
				<AvatarRankXp rank={this.props.rank} exp={this.props.exp}/>
				<Friends friends={this.props.friends} router={this.props.router}/>
				<Group groups={this.props.groups} router={this.props.router}/>
				<OtherPosts posts={this.props.posts}/>
				<OtherGoals goals={this.props.goals}/>
				<AddFriend userId={this.props.userId} myId={this.props.myId}/>
			</div>)
	}
});

module.exports = UserViewApp;