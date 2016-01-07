var React = require('react');
var AvatarChange = require('./avatarChange.jsx');
var AvatarRankXp = React.createClass({
	getInitialState:function(){
		return({
			hidden: true,
			avatar: this.props.avatar,
			value: 1
		})
	},
	_show:function(){
		this.setState({
			hidden: false
		})
	},
	_hide:function(){
		this.setState({
			hidden: true
		})
	},
	_change: function(e) {
		this.setState({
			avatar: e.target.id,
			value: e.target.id
		})
	},
	render:function() {
		
		return(<div id="avatarRankXpContainer">
				<div id="avatarDiv">
				<div id="picture"><img className="avatarImg" onClick={this._show} src={'../../../assets/avatar'+this.state.avatar+'.png'}/></div>
					
					{(this.props.rank=== 1 ? <span id="rank1">Novice</span> : null)}
					{(this.props.rank=== 2 ? <span id="rank2">JourneyMan</span> : null)}
					{(this.props.rank=== 3 ? <span id="rank3">Mentor</span> : null)}

					<span id="exp"><span>Exp: </span>{this.props.exp}</span>
				</div>
				<AvatarChange hidden={this.state.hidden} hide={this._hide} change={this._change} username={this.props.username} value={this.state.value}/>
			</div>)
	}
});

module.exports = AvatarRankXp;
