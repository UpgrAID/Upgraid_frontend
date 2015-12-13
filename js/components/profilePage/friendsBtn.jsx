var React = require('react');

var FriendsBtn = React.createClass({
	_profileNav: function(e) {
		var router = this.props.router;
		e.preventDefault();
		var userId = this.props.data;
		router.navigate('userView/'+ userId , {trigger:true})
	},
	render:function(){
		console.log('btn' + this.props.data);
		return(<button className="friend" value={this.props.data} onClick={this._profileNav}></button>)
	}
});

module.exports = FriendsBtn;