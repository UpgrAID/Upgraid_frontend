var React = require('react');

var Nav = React.createClass({
	_profileNav: function(e){
		var router =this.props.router;
		router.navigate('profile/' + this.props.username, {trigger:true});
	},
	render:function(){
		return(<div id='navContainer'>
					<ul id="navUl">
						<li onClick={this._profileNav}>Profile</li>
						<li>Group</li>
					</ul>
				</div>)
	}
});

module.exports = Nav;