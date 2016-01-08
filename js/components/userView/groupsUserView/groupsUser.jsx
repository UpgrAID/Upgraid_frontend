var React = require('react');
var GroupsUserBtn = require('./groupsUserBtn.jsx');
var GroupsUser = React.createClass({
	render: function(){
		var props = this.props;

		var test=this.props.groupsUser.map(function(obj){

					return(<p key={obj.id} className="groupUserButton"><GroupsUserBtn router={props.router} theme={obj.theme} id={obj.group} title = {obj.title} completed={obj.completed}/></p>)

			})
					return(<div id="groupsUserContainer"><h2 id="groupsUserHeader">{this.props.theirName}'s Groups</h2>{test}</div>)
			}
		});

module.exports = GroupsUser;
