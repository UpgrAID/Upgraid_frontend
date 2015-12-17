var React = require('react');

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
					<li className="groupUser" value={this.props.id} onClick={this._profileNav}>{this.props.username}</li>
				</div>
			)

	}
});

module.exports = User;
