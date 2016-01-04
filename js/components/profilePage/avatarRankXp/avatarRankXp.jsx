var React = require('react');

var AvatarRankXp = React.createClass({
	render:function() {
		return(<div id="avatarRankXpContainer">
				<div id="avatarDiv">
				<div id="picture"></div>
					
					{(this.props.rank=== 1 ? <span id="rank1">Novice</span> : null)}
					{(this.props.rank=== 2 ? <span id="rank2">JourneyMan</span> : null)}
					{(this.props.rank=== 3 ? <span id="rank3">Mentor</span> : null)}

					<span id="exp"><span>Exp: </span>{this.props.exp}</span>
				</div>

			</div>)
	}
});

module.exports = AvatarRankXp;
