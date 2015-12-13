var React = require('react');
var FriendsBtn = require('./friendsBtn.jsx');

var Friends = React.createClass({
	
	render: function() {
		props=this.props;
		
		var test=this.props.data.map(function(obj){
			return(<li><FriendsBtn data={obj} router={props.router}/></li>)
					})
					
				return(<ul>{test}</ul>)	
				
			
	}
});

module.exports = Friends;