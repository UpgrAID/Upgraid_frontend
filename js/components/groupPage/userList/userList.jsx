var React = require('react');
var User = require('./user.jsx');
var UserList = React.createClass({
	render:function() {
		var props=this.props;
			return(<ul>
					{this.props.data.map(function(obj){
						return(<User username={obj.username} id={obj.id} router={props.router}/>)
					})}
					</ul>
				)
	}
});

module.exports = UserList;