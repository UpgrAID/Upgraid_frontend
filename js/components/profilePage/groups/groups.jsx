var React = require('react');
var GroupsBtn = require('./groupsBtn.jsx');


//renders buttons which are links to groups based on how many goals they have.
var Groups = React.createClass({
	render: function(){
		var props = this.props;
		var test=this.props.goals.map(function(obj){

					return(<p key={obj.id} className="groupButton"><GroupsBtn router={props.router} theme={obj.theme} id={obj.group} title = {obj.title} completed={obj.completed}/></p>)

			})
					return(<div id="groupsContainer"><h2 id="groupsHeader">My Groups</h2>{test}</div>)
			}
		});

module.exports = Groups;
