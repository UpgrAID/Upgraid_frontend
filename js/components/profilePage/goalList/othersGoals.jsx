var React = require('react');

var OtherGoals = React.createClass({
	render:function(){
		
		var test=this.props.goals.map(function(obj){
			return(<p className="otherGoalsP" key={obj.id}>{obj.title}</p>)
	})
		return(<div id="otherGoalsContainer">
			<h2 id="otherGoals">Goals</h2>
			{test}
			</div>)
	}
})

module.exports = OtherGoals;
