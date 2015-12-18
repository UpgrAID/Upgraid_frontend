var React = require('react');

var AvatarRankXp = React.createClass({
	render:function() {
		return(<div id="avatarRankXpContainer">
				<div id="avatarDiv">

					
					{(this.props.rank=== 1 ? <p className="rank">Novice</p> : null)}
					{(this.props.rank=== 2 ? <p className="rank">JourneyMan</p> : null)}
					{(this.props.rank=== 3 ? <p className="rank">Mentor</p> : null)}

					<p id="exp"><span>Exp: </span>{this.props.exp}</p>
				</div>

			</div>)
	}
});

module.exports = AvatarRankXp;
