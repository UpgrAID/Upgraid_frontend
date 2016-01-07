var React = require('react');

var ToFriendsBtn = React.createClass({
	_profileNav: function(e) {
		var router = this.props.router;
		e.preventDefault();
		var userId = this.props.id;
		
		router.navigate('userView/'+ userId , {trigger:true})
	},
	render:function(){
		return(<button className="friendUser" value={this.props.id} onClick={this._profileNav}>{this.props.toFriend}</button>)
	}
});

module.exports = ToFriendsBtn;