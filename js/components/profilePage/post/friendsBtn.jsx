var React = require('react');

var FriendsBtn = React.createClass({
	_profileNav: function(e) {
		var router = this.props.router;
		e.preventDefault();
		this.setState({
			value: this.state.value
		})
		var userId = this.state.value;
		router.navigate('userView/'+ userId , {trigger:true})
	},
	render:function(){
		return(<button className="friend" onClick={this._profileNav}></button>)
	}
});

module.exports = FriendsBtn;