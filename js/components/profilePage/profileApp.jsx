var React = require('react');
var Nav = require('../nav/nav.jsx');
var Greeting =require('./greeting.jsx');
var GoalListApp = require('./goalList/goalListApp.jsx');
var Friends = require('./friends/friends.jsx');
var Group = require('./groups/groups.jsx');
var AvatarRankXp = require('./avatarRankXp/avatarRankXp.jsx');
var FriendRequest = require('./friends/friendRequest.jsx');
var Store= require('../../store.js')
var ProfilePostApp = require('./profilePost/profilePostApp.jsx');

var ProfileApp = React.createClass({
	_filterList: function(e){
	    var updatedList = this.state.users;
	    var test = this.state.users.map(function(obj){
	    	return obj.username;

	    });
	    updatedList = test.filter(function(item){
	     return item.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
	      

	    });
	    this.setState({users: updatedList});
	    console.log('test',test)
	  },
	getInitialState: function() {
		return({
			users: []
		})
	},
	_test: function() {
		this.setState({
			users: Store.data.users
		})
	},
	componentWillMount: function() {
			var Users = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/users/'
			})
			var UserCollection = Backbone.Collection.extend({
			Model:Users,
			url:'https://safe-brook-9891.herokuapp.com/api/users/'
			})

		var userCollect = new UserCollection;
		var that=this;
		userCollect.fetch({
			success:function(resp) {
				
				allUsers=resp.toJSON();
				_.extend(Store.data, {users: allUsers});
				that._test()
			}
		});
	},
	
	render: function() {
		
		return(<div>
				
				<Nav router={this.props.router} username={this.props.username} userId = {this.props.uid} fromAll={this.props.fromAll} users={this.state.users} filterList={this._filterList}/>
				<Greeting name={this.props.name}/>
				<AvatarRankXp rank={this.props.rank} exp={this.props.exp}/>
				<ProfilePostApp posts={this.props.posts} groups={this.props.groups}/>
				<GoalListApp goals={this.props.goals} router={this.props.router}/>
				<Friends fromFriends={this.props.fromFriends} toFriends={this.props.toFriends}  router={this.props.router}/>
				<Group groups={this.props.groups} router={this.props.router}/>
				</div>)
	}
})

module.exports = ProfileApp;
