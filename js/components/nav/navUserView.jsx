var React = require('react');
var SearchUsers = require('./searchUsers.jsx')
var AddFriend = require('../userView/addFriend/addFriend.jsx');

var NavUserView = React.createClass({


	_profileNav: function(e){
		var router =this.props.router;
		router.navigate('profile/' + this.props.username, {trigger:true});
	},
	//logic to hide AddFriend button if target user has already been sent a friend request
	render:function(){

		return(<div>
					<div id='navContainerUser'>
						<ul id="navUlUser">
							<li className="logo">UpgrAID</li>
							<li className="mainLi" onClick={this._profileNav}>MyProfile</li>
							<li className="searchBar">
								<SearchUsers
									users={[]}
									doSearch = {[]}
									query={[]}
									router={this.props.router}/>
							</li>
							<li>{!this.props.friend ? <AddFriend userId={this.props.userId} theirId={this.props.theirId}/> : null}</li>
						</ul>

					</div>

				<div className="header"></div>

				</div>
				)
	}
});

module.exports = NavUserView;
