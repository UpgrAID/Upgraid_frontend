var React = require('react');

//display earned user badges
var BadgeCount = React.createClass({
	render:function(){
		return(
			<div>
				{this.props.data.map(function(obj){
					return(

							<div className="badgeTest" key={obj.id}>
								<span>{obj.achievement.badge_amount} x <img className="badge"src='/assets/badge.jpg'/></span>
								<span className="achievementTitle">{obj.achievement.name}</span>
							</div>


						)

				})}
			</div>
			)
	}
})

module.exports = BadgeCount;
