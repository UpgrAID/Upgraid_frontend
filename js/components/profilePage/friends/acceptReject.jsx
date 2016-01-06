var React = require('react');
var Backbone = require('backbone');


var AcceptReject = React.createClass({

	_handleAccept: function(event){

		event.preventDefault();
		var FriendAccept = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/friends/' + this.props.requester.id
		});
		var Faccept = new FriendAccept();
		Faccept.set({
			id: this.props.requester.id,
			from_friend: this.props.requester.from_friend.id,
			to_friend: this.props.userId,
			accepted: true
		});

		Faccept.save();

	},

	_handleDecline: function(event){
		event.preventDefault();
		var FriendDecline = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/friends/'+ this.props.requester.id
		});
		var Fdecline = new FriendDecline();
		Fdecline.set({
			id: this.props.requester.id,
			to_friend: this.props.userId,
			from_friend: this.props.requester.from_friend,
			accepted: false
		});
		Fdecline.save();


	},
	render: function(){

		return (
			<li className="reqObj">
				<span className="requester">{this.props.requester.from_friend.username}</span>
				<span className="accRejContain">
				<button className="accbutton" onClick={this._handleAccept}>Accept</button>
				<button className="rejbutton" onClick={this._handleDecline}>Decline</button>
				</span>
			</li>

		)
	}
});

module.exports = AcceptReject;
