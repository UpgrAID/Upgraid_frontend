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
		this.setState({
			frRq: req
		});
	},
	componentWillMount: function(){
				self=this;
				fr = this.props.fromAll;
				f = fr.filter(function(usr){
					if(!usr.accepted){
						return true
					}else {
						return false
					}
				})
					self._loadReq(f);
				},



	render: function(){
		var that = this;
		return (
			<ul id="friendRequests">
				{this.state.frRq.map(function(req){
					return(
						<AcceptReject key={req.id} requester={req} userId={that.props.userId}/>)
			})}
			</ul>
		)
	},

});

module.exports = FriendRequest;
