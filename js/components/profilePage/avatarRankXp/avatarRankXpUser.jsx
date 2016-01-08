var React = require('react');
var AvatarChange = require('./avatarChange.jsx');
var AvatarRankXpUser = React.createClass({

	//select user rank based on api rank value
	render:function() {

		return(<div id="avatarRankXpContainerUser">
				<div id="avatarDivUser">
				<span id='usernameAvatar'>{this.props.user}</span>
				<div id="pictureUser"><img className="avatarImgUser" onClick={this._show} src={'../../../assets/avatar'+1+'.png'}/></div>

					
				</div>

				{(this.props.rank=== 1 ? <span id="rank1User">Novice</span> : null)}
					{(this.props.rank=== 2 ? <span id="rank2User">JourneyMan</span> : null)}
					{(this.props.rank=== 3 ? <span id="rank3User">Mentor</span> : null)}

					<span id="expUser"><span>Exp: </span>{this.props.exp}</span>
			</div>)
	}
});

module.exports = AvatarRankXpUser;
