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
				self=this;
				fr = this.props.fromAll;
				console.log('fromAll',fr);
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
		console.log('test',this.state.frRq);
		return (
			<ul id="friendRequests">
				{this.state.frRq.map(function(req){
					return(
						<AcceptReject requester={req}/>)
			})}
			</ul>
		)
	},

});

module.exports = FriendRequest;
