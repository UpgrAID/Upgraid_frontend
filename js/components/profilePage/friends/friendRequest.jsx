var React = require('react');
var Friendly = require('../../../models/friendly');
var Friendlies = require('../../../collections/friendlies');
var Store = require('../../../store');
var User = require('../../../models/user');
var Users = require('../../../collections/users');


var FriendRequest = React.createClass({
	getInitialState: function(){
		return {
			frRq: []
		}
	},
	_loadReq: function(req){
		this.setState({frRq: req});
	},
	componentWillMount: function(){
		var frq = new Friendlies();
		self = this
		frq.fetch({
			success: function(resp){
				fr = resp.toJSON();
				f = fr.filter(function(usr){
					if(usr.to_friend === Store.data.userName){
						return true
					}else {
						return false
					}
				}).map(function(u){
					return u.from_friend
				})
					self._loadReq(f);
				}
			})
	},

	render: function(){
		console.log(this.state.frRq);
		return (
			<div id="friendRequests">
				{this.state.frRq.map(function(reqName){
					return(<p>{reqName}</p>)
			})}
			</div>
		)
	},

});

module.exports = FriendRequest;
