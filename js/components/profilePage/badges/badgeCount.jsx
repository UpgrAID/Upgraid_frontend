var React = require('react');

var BadgeCount = React.createClass({
	render:function(){
		return(
			<div>
				{this.props.data.map(function(obj){
					return(<p>{obj.achievement.badge_amount} x <img className="badge"src='/assets/badge.jpg'/></p>)
				})}
			</div>
			)
	}
})

module.exports = BadgeCount;