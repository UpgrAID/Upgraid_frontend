var React = require('react');
var FriendsBtn = require('./friendsBtn.jsx');

var Friends = React.createClass({

	render: function() {
		props=this.props;
		var test=this.props.data.map(function(obj){
			return(<li key={obj.id}><FriendsBtn friendName={obj.to_friend.first_name} data={obj.to_friend.id} router={props.router}/></li>)
					})

				return(<ul>
					<h2>Friends</h2>
					{test}
					</ul>)


	}
});

module.exports = Friends;
