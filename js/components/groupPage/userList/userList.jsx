var React = require('react');

var userList = React.createClass({
	render:function() {
		var props=this.props;
			return(<ul>
					{this.props.data.map(function(obj){
						return(<li>{obj.user}</li>)
					})}
					</ul>
				)
	}
});

module.exports = userList;