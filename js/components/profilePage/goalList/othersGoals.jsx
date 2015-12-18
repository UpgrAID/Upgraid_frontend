var React = require('react');

var OtherGoals = React.createClass({
	render:function(){
		console.log(this.props.goals);
		var test=this.props.goals.map(function(obj){
			return(<p key={obj.id}>{obj.title}</p>)
	})
		return(<div>
			<h2>Goals</h2>
			{test}
			</div>)
	}
})

module.exports = OtherGoals;