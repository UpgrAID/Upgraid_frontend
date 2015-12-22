var React = require('react');

var AvatarRankXp = React.createClass({
	render:function() {
		return(<div id="avatarRankXpContainer">
				<div id="avatarDiv">
				<div id="picture"></div>
					
					{(this.props.rank=== 1 ? <p id="rank1">Novice</p> : null)}
					{(this.props.rank=== 2 ? <p id="rank2">JourneyMan</p> : null)}
					{(this.props.rank=== 3 ? <p id="rank3">Mentor</p> : null)}

					<p id="exp"><span>Exp: </span>{this.props.exp}</p>
				</div>

			</div>)
	}
});

module.exports = AvatarRankXp;
