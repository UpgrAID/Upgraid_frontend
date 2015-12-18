var React = require('react');
var OtherPosts= require('../../components/profilePage/post/othersPosts.jsx');
var OtherGoals= require('../../components/profilePage/goalList/othersGoals.jsx');
var Greeting = require('../../components/profilePage/greeting.jsx');
var Nav = require('../../components/nav/nav.jsx');
var Friendlies = require('../../collections/friendlies');
var AddFriend = require('../userView/addFriend/addFriend.jsx');
var Store = require('../../store');

var UserViewApp = React.createClass({
	getInitialState: function(){
		return {
			frnds: null
		}
	},
	_isTrue: function(fr){
		this.setState({frnds: fr});
	},
	componentWillMount: function(){
		var props = this.props;
		var self = this;
		friendList = new Friendlies();
		friendList.fetch({
			success: function(resp){
				fr = resp.toJSON();
			var frs = fr.filter(function(f){
				if (props.userId === f.to_friend && props.myId === f.from_friend){
					self._isTrue(true);
				}
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
				{!this.state.frnds ?
				<AddFriend userId={this.props.userId} myId={this.props.myId}/>
				: null }

			</div>)
	}
});

module.exports = UserViewApp;
