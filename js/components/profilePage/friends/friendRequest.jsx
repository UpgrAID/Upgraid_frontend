var React = require('react');
var Friendly = require('../../../models/friendly');
var Friendlies = require('../../../collections/friendlies');
var Store = require('../../../store');
var User = require('../../../models/user');
var Users = require('../../../collections/users');
var AcceptReject = require('./acceptReject.jsx');


var FriendRequest = React.createClass({
	getInitialState: function(){
		return {
			frRq: []
		}
	},
	_loadReq: function(req){
		console.log('test');
		this.setState({
			frRq: req
		});
	},
	componentWillMount: function(){
		var frq = new Friendlies();
		self = this
		frq.fetch({
			success: function(resp){
				fr = resp.toJSON();
				f = fr.filter(function(usr){
					if(usr.to_friend === Store.data.userId && !usr.accepted){
						return true
					}else {
						return false
					}
				})
					self._loadReq(f);
				}
			})
	},

	render: function(){
		console.log(this.state.frRq);
		return (
			<div id="friendRequests">Users who want to be Friends:
				{this.state.frRq.map(function(req){
					return(
						<AcceptReject requester={req}/>)
			})}
			</div>
		)
	},

});

module.exports = FriendRequest;
