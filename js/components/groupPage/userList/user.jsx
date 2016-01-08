var React = require('react');

//renders a button for each member in a group. Navigates user to user profiles.
var User = React.createClass({
	_profileNav: function() {
		var router = this.props.router;
		var userId=this.props.id;
		router.navigate('userView/'+ userId , {trigger:true});
	},
	render:function() {
		var props=this.props;
			return(
				<div>
					<li className="userListBtn" value={this.props.id} onClick={this._profileNav}>{this.props.username}</li>
				</div>
			)

	}
});

module.exports = User;
