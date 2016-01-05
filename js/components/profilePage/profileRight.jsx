var React = require('react');
var GoalListApp = require('./goalList/goalListApp.jsx');
var Badges = require('./badges/badges.jsx');

var ProfileRight = React.createClass({
	render:function(){
		return(<div id="profileRight">
				<GoalListApp goals={this.props.goals} router={this.props.router}/>
				<Badges username={this.props.username}/>
			</div>)
	}
});

module.exports = ProfileRight;