var React = require('react');
var GroupsBtn = require('./groupsBtn.jsx');
var Groups = React.createClass({
	render: function(){
		var props = this.props;

		var test=this.props.groups.map(function(obj){
			return(<p key={obj.id} className="groupButton"><GroupsBtn router={props.router} id={obj.id}/></p>)
					})
		return(<div id="groupsContainer"><h2>Groups</h2>{test}</div>)
	}
});

module.exports = Groups;
