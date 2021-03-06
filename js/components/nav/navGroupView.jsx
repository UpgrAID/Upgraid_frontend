var React = require('react');
var SearchUsers = require('./searchUsers.jsx');

var NavGroupView = React.createClass({


	_profileNav: function(e){
		var router =this.props.router;
		router.navigate('profile/' + this.props.username, {trigger:true});
	},
	//logic to render specific pictures based on theme 
	render:function(){

		return(<div>
					<div className='navContainer'>
						<ul id="navUlGroup">
							<li className="logo">UpgrAID </li>
							<li className="mainLi"onClick={this._profileNav}>MyProfile</li>
							<li className="searchBar"><SearchUsers
								users={[]}
								doSearch = {[]}
								query={[]}
								router={this.props.router}/></li>
						</ul>

					</div>
					{(this.props.theme=== 1 ?
						<div className="header"><img src="../../assets/group-theme-1.jpg" />
							<h1 className="groupHeader">Skills: Group {this.props.groupId}</h1>
						</div> : null)}
					{(this.props.theme=== 2 ?
						 <div className="header"><img src="../../assets/group-theme-2.jpg" />
						 	<h1 className="groupHeader">Bad Habits: Group {this.props.groupId}</h1>
						 </div> : null)}
					{(this.props.theme=== 3 ?
						 <div className="header"><img src="../../assets/group-theme-3.png" />
						 	<h1 className="groupHeader">Health & Fitness: Group {this.props.groupId}</h1>
						 </div> : null)}


				</div>
				)
	}
});

module.exports = NavGroupView;
