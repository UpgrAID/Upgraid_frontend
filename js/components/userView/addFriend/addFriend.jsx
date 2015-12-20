var React = require('react');
var Friendly = require('../../../models/friendly');
var Friendlies = require('../../../collections/friendlies'); 

var AddFriend = React.createClass({

	_friend: function(e) {
		e.preventDefault();


		var FriendCollection = Backbone.Collection.extend({
			Model: Friendly,
			url:'http://safe-brook-9891.herokuapp.com/api/friends/'
		});
		var friend = new Friendly();

		friend.set({
			from_friend:this.props.myId,
			to_friend:this.props.userId
		})
		
		friend.save({}, {
			success: function(resp) {
				console.log(resp);
			}
		})
	},
	render: function() {
		return(
			<button id="addFriend" onClick={this._friend}>+Friend</button>
		)
	}
});

module.exports= AddFriend;
