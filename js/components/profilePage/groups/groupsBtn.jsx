var React = require('react');

var GroupsBtn = React.createClass({
	_GroupsNav: function(e) {

		e.preventDefault();
		
		this.props.router.navigate('group/'+ this.props.id , {trigger:true})
	},
	render:function(){
		
		return(<button className="group" onClick={this._GroupsNav}>{this.props.id}</button>)
	}
});

module.exports = GroupsBtn;