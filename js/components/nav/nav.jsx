var React = require('react');

var Nav = React.createClass({
	render:function(){
		return(<div id='navContainer'>
					<ul id="navUl">
						<li>Profile</li>
						<li>Group</li>
					</ul>
				</div>)
	}
});

module.exports = Nav;