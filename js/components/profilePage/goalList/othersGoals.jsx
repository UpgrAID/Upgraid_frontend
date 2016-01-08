var React = require('react');

//displays other users goals.
var OtherGoals = React.createClass({
	render:function(){

		var test=this.props.goals.map(function(obj){
			return(<p className="otherGoalsP" key={obj.id}>{obj.title}</p>)
	})
		return(<div id="otherGoalsContainer">
			<h2 id="otherGoals">{this.props.theirName}&#39;s Goals</h2>
			{test}
			</div>)
	}
})

module.exports = OtherGoals;
