var React = require('react');
var GoalListApp = require('../goalList/GoalListApp.jsx');
var PostListApp = require('../post/PostListApp.jsx');
var ProfileApp = React.createClass({
	render: function() {
		return(<div>
				<GoalListApp/>
				<PostListApp/>
				</div>)
	} 
})

module.exports = ProfileApp;