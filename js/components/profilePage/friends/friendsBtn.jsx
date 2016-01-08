var React = require('react');

//navigates to userView on click of user
var FriendsBtn = React.createClass({
	_profileNav: function(e) {
		var router = this.props.router;
		e.preventDefault();
		var userId = this.props.id;

		router.navigate('userView/'+ userId , {trigger:true})
	},
	render:function(){
		return(<button className="friend" value={this.props.id} onClick={this._profileNav}>{this.props.friendName}</button>)
	}
});

module.exports = FriendsBtn;
