var React = require('react');

var FriendsBtn = React.createClass({
	_profileNav: function(e) {
		var router = this.props.router;
		e.preventDefault();
		var userId = this.props.data;
		
		router.navigate('userView/'+ userId , {trigger:true})
	},
	render:function(){
		return(<button className="friend" value={this.props.data} onClick={this._profileNav}>{this.props.friendName}</button>)
	}
});

module.exports = FriendsBtn;
