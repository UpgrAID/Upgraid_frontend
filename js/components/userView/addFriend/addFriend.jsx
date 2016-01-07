var React = require('react');
var Friendly = require('../../../models/friendly');
var Friendlies = require('../../../collections/friendlies'); 
var Store = require('../../../store.js')
var AddFriend = React.createClass({

	_friend: function(e) {
		e.preventDefault();


		var FriendCollection = Backbone.Collection.extend({
			Model: Friendly,
			url:'http://safe-brook-9891.herokuapp.com/api/friends/'
		});
		var friend = new Friendly();

		friend.set({

			from_friend:Store.data.uid,
			to_friend:this.props.theirId


		})

		friend.save();
	},
	render: function() {
		return(
			<button id="addFriend" onClick={this._friend}>+Invite Friend</button>
		)
	}
});

module.exports= AddFriend;
