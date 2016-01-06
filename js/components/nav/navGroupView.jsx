var React = require('react');
var SearchUsers = require('./searchUsers.jsx');

var NavUserView = React.createClass({
	_profileNav: function(e){
		var router =this.props.router;
		router.navigate('profile/' + this.props.username, {trigger:true});
	},
	render:function(){

		return(<div>
					<div id='navContainerUser'>
						<ul id="navUlUser">
							<li>UpgrAID </li>
							<li onClick={this._profileNav}> MyProfile</li>
						</ul>

					</div>

				<div className="header"></div>

				</div>
				)
	}
});

module.exports = NavUserView;
