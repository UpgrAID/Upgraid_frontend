var React = require('react');
var AvatarRankXp = require('./avatarRankXp/avatarRankXp.jsx');
var Friends = require('./friends/friends.jsx');
var Group = require('./groups/groups.jsx');
var Greeting =require('./greeting.jsx');

var ProfileLeft = React.createClass({
	render:function(){
		return(
			<div id="profileLeft">
				<AvatarRankXp rank={this.props.rank} exp={this.props.exp}/>
				<Group  groups={this.props.groups} router={this.props.router}/>
				<Friends fromFriends={this.props.fromFriends} toFriends={this.props.toFriends}  router={this.props.router}/>
				<Greeting name={this.props.name}/>
			</div>
			)
	}
});

module.exports = ProfileLeft;

