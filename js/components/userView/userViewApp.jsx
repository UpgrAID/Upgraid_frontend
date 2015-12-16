var React = require('react');
var OtherPosts= require('../../components/profilePage/post/othersPosts.jsx');
var OtherGoals= require('../../components/profilePage/goalList/othersGoals.jsx');
var Greeting = require('../../components/profilePage/greeting.jsx');
var UserViewApp = React.createClass({
	render:function() {
		return(<div>
				<OtherPosts posts={this.props.posts}/>
				<OtherGoals goals={this.props.goals}/>
				<Greeting name={this.props.name}/>
			</div>)
	}
});

module.exports = UserViewApp;