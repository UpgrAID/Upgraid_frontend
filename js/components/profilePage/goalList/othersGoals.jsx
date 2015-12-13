var React = require('react');

var OtherGoals = React.createClass({
	render:function(){
		var test=this.props.data.map(function(obj){
			return(<p>{obj.title}</p>)
	})
		return(<div>{test}</div>)
	}
})

module.exports = OtherGoals;