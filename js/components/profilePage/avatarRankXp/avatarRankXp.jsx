var React = require('react');

var AvatarRankXp = React.createClass({
	render:function() {
		console.log(this.props.rank)
		return(<div id="avatarRankXpContainer">
				<div id="avatarDiv">
					
					{(this.props.rank=== 1 ? <span className="rank">Novice</span> : null)}
					{(this.props.rank=== 2 ? <span className="rank">JourneyMan</span> : null)}
					{(this.props.rank=== 3 ? <span className="rank">Mentor</span> : null)}
					<p id="exp"><span>Exp: </span>{this.props.exp}</p>
				</div>

			</div>)
	}
});

module.exports = AvatarRankXp;