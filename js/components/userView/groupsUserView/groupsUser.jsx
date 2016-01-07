var React = require('react');
var GroupsBtn = require('./groupsUserBtn.jsx');
var GroupsUser = React.createClass({
	render: function(){
		var props = this.props;
		
		var test=this.props.goals.map(function(obj){
			
					return(<p key={obj.id} className="groupUserButton"><GroupsBtn router={props.router} theme={obj.theme} id={obj.group} title = {obj.title} completed={obj.completed}/></p>)
				  
			})
					return(<div id="groupsUserContainer"><h2 id="groupsUserHeader">Their Groups</h2>{test}</div>)
			}
		});

module.exports = GroupsUser;