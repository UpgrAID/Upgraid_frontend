var React = require('react');

var AvatarChange = React.createClass({
	getInitialState: function(){
		return({
			avatar: '../../../assets/avatar'
		})
	},
	_update:function(){
		this.props.hide()
		var Avatar = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/profiles/?username='
		});

	},
	render:function(){
		
		return(<div>{(this.props.hidden ? null :
			
			<div id="avatarModal">
			<h2 id="avatarModalHeader">Pick a new Avatar</h2>
				<ul id="avatarUl">
					<li className="avatars"><img id='1' src={this.state.avatar+'1.png'} onClick={this.props.change}/></li>
					<li className="avatars"><img id='2' src={this.state.avatar+'2.png'} onClick={this.props.change}/></li>
					<li className="avatars"><img id='3' src={this.state.avatar+'3.png'} onClick={this.props.change}/></li>
					
				</ul>
				<button id="avatarSubmit" onClick={this._update}>Got it!</button>
			</div>
			
			
			
			
			)}
			</div>
		)
	}
});
module.exports = AvatarChange;