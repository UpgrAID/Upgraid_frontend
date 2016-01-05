var React = require('react');
var GroupsBtn = require('./groupsBtn.jsx');
var Groups = React.createClass({
	render: function(){
		var props = this.props;
		console.log('groups',this.props)
		var test=this.props.goals.map(function(obj){
			
					return(<p key={obj.id} className="groupButton"><GroupsBtn router={props.router} theme={obj.theme} id={obj.group} title = {obj.title} completed={obj.completed}/></p>)
				  
			})
					return(<div id="groupsContainer"><h2 id="groupsHeader">Groups</h2>{test}</div>)
			}
		});

module.exports = Groups;
