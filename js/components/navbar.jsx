var React = require('react');


var Navbar = React.createClass({
	render: function(){
		return (
			<div className="fixed-nav-bar">
				<span id="logo">UpgrAid</span>
				
				<span id="links">
				<span id="grouplink"><a href="group">Group</a></span>
				<span id="profileLink"><a href="profile">Profile</a></span>
				</span>
			</div>
		)
	}

});

module.exports = Navbar;
