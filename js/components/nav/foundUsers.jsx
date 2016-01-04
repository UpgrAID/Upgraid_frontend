var React = require('react');

var FoundUsers = React.createClass({
	_nav: function() {
		var router =this.props.router;
		router.navigate('userView/' + this.props.id, {trigger:true});
	},
	render:function() {

		return(<div id="userChoice"><p value={this.props.id} onClick={this._nav}>{this.props.username}</p></div>)


	}
});

module.exports = FoundUsers;
