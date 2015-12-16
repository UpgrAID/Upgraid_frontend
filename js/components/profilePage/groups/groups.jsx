var React = require('react');
var GroupsBtn = require('./groupsBtn.jsx');
var Groups = React.createClass({
	render: function(){
		var props = this.props;

		var test=this.props.data.map(function(obj){
			return(<li key={obj.id} className="groupButton"><GroupsBtn router={props.router} id={obj.id}/></li>)
					})
		return(<div><h2>Groups</h2>{test}</div>)
	}
});

module.exports = Groups;
