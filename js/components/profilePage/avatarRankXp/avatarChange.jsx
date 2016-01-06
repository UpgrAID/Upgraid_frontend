var React = require('react');
var Store = require('../../../store.js')
var AvatarChange = React.createClass({
	getInitialState: function(){
		return({
			avatar: '../../../assets/avatar'
			
		})
	},
	
	_update:function(e){
		this.props.hide()
		console.log('obId',Store.data.objectId)
		$.ajax({
			url:'https://safe-brook-9891.herokuapp.com/api/profiles/'+ Store.data.objectId,
			method:'PUT',
			data: {avatar: e.target.value }
		}).then(function(resp){

			console.log(resp)
		})

	},
	render:function(){
		
		return(<div>{(this.props.hidden ? null :
			
			<div id="avatarModal">
			<h2 id="avatarModalHeader">Pick a new Avatar</h2>
				<ul id="avatarUl">
					<li className="avatars"><img id='1'  src={this.state.avatar+'1.png'} onClick={this.props.change}/></li>
					<li className="avatars"><img id='2'  src={this.state.avatar+'2.png'} onClick={this.props.change}/></li>
					<li className="avatars"><img id='3'  src={this.state.avatar+'3.png'} onClick={this.props.change}/></li>
					
				</ul>
				<button id="avatarSubmit"  value={this.props.value} onClick={this._update}>Got it!</button>
			</div>
			
			
			
			
			)}
			</div>
		)
	}
});
module.exports = AvatarChange;