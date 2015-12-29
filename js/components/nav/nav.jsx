var React = require('react');
var FriendRequest = require('../profilePage/friends/friendRequest.jsx');
var SearchUsers = require('./searchUsers.jsx');
var Quote = require('./quote.jsx');

var Nav = React.createClass({
	getInitialState: function() {
		return({quote: ''})
	},
	componentWillMount: function() {
		var quote = ['Life is 10% what happens to you and 90% how you react to it.',
					"Don't watch the clock; do what it does. Keep going."
		]
		function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		var RandomQuote = quote[getRandomInt(0,1)];
		console.log(RandomQuote);
		this.setState({
			quote: RandomQuote
		});
	},
	_profileNav: function(e){
		var router =this.props.router;
		router.navigate('profile/' + this.props.username, {trigger:true});
	},
	render:function(){
		return(<div>
				<div id='navContainer'>
					<ul id="navUl">
						<li className="mainLi" onClick={this._profileNav}>Profile</li>
						<li className="mainLi">Group</li>
						<li><SearchUsers users={this.props.users} filterList = {this.props.filterList}/></li>
						<li id="friendLi" className="mainLi">
							<span id="square"></span>
							<FriendRequest userID={this.props.uid} fromAll={this.props.fromAll}/>
						</li>
					</ul>

				</div>
				<div id="header"><Quote quote={this.state.quote}/></div>
				</div>)
	}
});

module.exports = Nav;