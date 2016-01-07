var React = require('react');

var GroupsUserBtn = React.createClass({
	getInitialState: function(){
		return {
			themeName: null
		}
	},
	componentWillMount: function(){
		switch(this.props.theme){
			case 1:
				this.setState({themeName: 'Skills'});
				break;
			case 2:
				this.setState({themeName: 'Habits'});
				break;
			case 3:
				this.setState({themeName: 'Health'});
				break;

		}
	},
	_GroupsNav: function(e) {

		e.preventDefault();

		this.props.router.navigate('group/'+ this.props.id , {trigger:true})
	},
	render:function(){

		return(<span>{(this.props.completed ? null :<button className="groupUser" onClick={this._GroupsNav}><span className="groupNameUser"></span>{this.props.title}</button>)}</span>)
	}
});

module.exports = GroupsUserBtn;