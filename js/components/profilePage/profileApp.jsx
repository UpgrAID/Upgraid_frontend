var React = require('react');
var Nav = require('../nav/nav.jsx');
var Greeting =require('./greeting.jsx');
var GoalListApp = require('./goalList/goalListApp.jsx');
var Friends = require('./friends/friends.jsx');
var Group = require('./groups/groups.jsx');
var AvatarRankXp = require('./avatarRankXp/avatarRankXp.jsx');
var FriendRequest = require('./friends/friendRequest.jsx');
var Store= require('../../store.js');
var ProfilePostApp = require('./profilePost/profilePostApp.jsx');
var Badges = require('./badges/badges.jsx');
var MessageApp = require('./messaging/messageApp.jsx');
var ProfileApp = React.createClass({
	_doSearch:function(queryText){
        console.log(queryText)
        //get query result
        var queryResult=[];
        var test=this.state.filteredData.forEach(function(person){
            if(person.username.toLowerCase().indexOf(queryText)!=-1)
            queryResult.push(person);
        });
 
        this.setState({
            query:queryText,
            filteredData: queryResult
        })
        
    },
    getInitialState:function(){
        return{
        	
            query:'',
            filteredData: Store.data.users
        }
    },
	
	_test: function() {
		this.setState({
			filteredData: Store.data.users
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
				
				<Nav router={this.props.router} username={this.props.username} userId = {this.props.uid} fromAll={this.props.fromAll} users={this.state.filteredData} query={this.state.query} doSearch={this._doSearch}/>
				<Greeting name={this.props.name}/>
				<AvatarRankXp rank={this.props.rank} exp={this.props.exp}/>
				<ProfilePostApp posts={this.props.posts} groups={this.props.groups}/>
				<GoalListApp goals={this.props.goals} router={this.props.router}/>
				<Badges username={this.props.username}/>
				<Friends fromFriends={this.props.fromFriends} toFriends={this.props.toFriends}  router={this.props.router}/>
				<Group groups={this.props.groups} router={this.props.router}/>
				<MessageApp fromFriends={this.props.fromFriends} toFriends={this.props.toFriends} username={this.props.username}/>
				</div>)
	}
})

module.exports = ProfileApp;
