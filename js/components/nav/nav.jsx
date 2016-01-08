var React = require('react');
var Quote = require('./quote.jsx');
var quoteStore = require('../../quotes/quotes.js')
var MainNav = require('./mainNav.jsx');
var SearchUsers = require('./searchUsers.jsx');
var FriendRequest = require('../profilePage/friends/friendRequest.jsx')
var Nav = React.createClass({

	getInitialState: function() {
		return({quote: ''})
	},
	componentWillMount: function() {

		function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		var RandomQuote = quoteStore[getRandomInt(0,28)];

		this.setState({
			quote: RandomQuote
		});
	},
	render:function(){
		return(<div>

				<div id='navContainer'>
					<div id="navContain">
					<ul id="navUl">
						<li className="logo"> UpgrAID</li>
						<li className="mainLi" onClick={this._profileNav}> MyProfile</li>
						<li className="searchBar">
							<SearchUsers 
								users={this.props.users} 
								doSearch = {this.props.doSearch} 
								query={this.props.query} 
								router={this.props.router}/>
						</li>
						<li id="friendLi" className="mainLi">
							<span id="square" className='entypo-users'></span>
							<FriendRequest userId={this.props.userId} fromAll={this.props.fromAll}/>
						</li>
					</ul>
					</div>
				</div>

				<div className="header"><Quote quote={this.state.quote}/></div>
				</div>)
	}
});

module.exports = Nav;
