var React = require('react');

var BadgeCount = React.createClass({
	render:function(){
		return(
			<div>
				{this.props.data.map(function(obj){
					return(

							<div className="badgeTest">
								<span className="badge">{obj.achievement.badge_amount} x <img className="badge"src='/assets/badge.jpg'/></span>
								<span className="achievementTitle">{obj.achievement.name}</span>
							</div>
							
						
						)

				})}
			</div>
			)
	}
})

module.exports = BadgeCount;