var React = require('react');
var OtherPosts= require('../../components/profilePage/post/othersPosts.jsx');
var OtherGoals= require('../../components/profilePage/goalList/othersGoals.jsx');
var Greeting = require('../../components/profilePage/greeting.jsx');
var Nav = require('../../components/nav/nav.jsx');
var AddFriend = require('../userView/addFriend/addFriend.jsx');
var UserViewApp = React.createClass({
	render:function() {
		return(<div>
				<Nav router={this.props.router} username={'thomas1117'}/>
				<OtherPosts posts={this.props.posts}/>
				<OtherGoals goals={this.props.goals}/>
				<Greeting name={this.props.name}/>
				<AddFriend userId={this.props.userId}/>
			</div>)
	}
});

module.exports = UserViewApp;