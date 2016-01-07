var React = require('react');

var FromFriendsBtn = React.createClass({
	_profileNav: function(e) {
		var router = this.props.router;
		e.preventDefault();
		var userId = this.props.id;
		
		router.navigate('userView/'+ userId , {trigger:true})
	},
	render:function(){
		return(<button className="friendUser" value={this.props.id} onClick={this._profileNav}>{this.props.friendName}</button>)
	}
});

module.exports = FromFriendsBtn;