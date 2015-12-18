var React = require('react');
var OtherPosts= require('../../components/profilePage/post/othersPosts.jsx');
var OtherGoals= require('../../components/profilePage/goalList/othersGoals.jsx');
var Greeting = require('../../components/profilePage/greeting.jsx');
var Nav = require('../../components/nav/nav.jsx');
var Friends = require('../../collections/friends');
var AddFriend = require('../userView/addFriend/addFriend.jsx');
var Store = require('../../store');

var UserViewApp = React.createClass({
	getInitialState: function(){
		return {
			frnds: []
		}
	},
	componentWillMount: function(){
		self = this;
		friendList = new Friends();
		friendList.fetch({
			success: function(resp){
				fr = resp.toJSON();
			var frs = fr.map(function(f){
				var bff = []
				if (Store.data.userId == f.from_friend.id){
					bff.push[f];
					console.log('ok');
					return bff;
				}
				self.setState({frnds: frs})
			})
			}
		})
	},
	render:function() {
		return(<div>
				<Nav router={this.props.router} username={'thomas1117'}/>
				<OtherPosts posts={this.props.posts}/>
				<OtherGoals goals={this.props.goals}/>
				<Greeting name={this.props.name}/>

				<AddFriend userId={this.props.userId} myId={this.props.myId}/>

			</div>)
	}
});

module.exports = UserViewApp;
