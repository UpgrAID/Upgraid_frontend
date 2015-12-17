var React = require('react');

var AddFriend = React.createClass({
	_friend: function(e) {
		e.preventDefault();
		console.log('test');
		var Friend = Backbone.Model.extend({
			url:'http://safe-brook-9891.herokuapp.com/api/friends/',
			intitialize: function() {
				console.log('a new friendship has been created');
			}
		});
		var FriendCollection = Backbone.Collection.extend({
			Model: Friend,
			url:'http://safe-brook-9891.herokuapp.com/api/friends/'
		});
		var friend = new Friend();

		friend.set({
			from_friend:this.props.myId,
			to_friend:this.props.userId
		})
		friend.save({}, {
			success: function(resp) {
				console.log(resp.toJSON());
			}
		})
	},
	render: function() {
		return(<button id="addFriend" onClick={this._friend}>+Friend</button>)
	}
});

module.exports= AddFriend;