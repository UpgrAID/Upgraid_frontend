var React = require('react');

var FoundUsers = React.createClass({
	_nav: function() {
		var router =this.props.router;
		router.navigate('userView/' + this.props.id, {trigger:true});
	},
	//navigates to clicked user in search window
	render:function() {

		return(<div id="userChoice"><span><img className='avatarUserList' src='../../assets/avatar1.png'/></span><p value={this.props.id} onClick={this._nav}>{this.props.username}</p></div>)


	}
});

module.exports = FoundUsers;
