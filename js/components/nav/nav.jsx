var React = require('react');


var Quote = require('./quote.jsx');
var quoteStore = require('../../quotes/quotes.js')
var MainNav = require('./mainNav.jsx');
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
				<MainNav  
					username={this.props.username}
					router={this.props.router}
					users={this.props.users} 
					doSearch = {this.props.doSearch} 
					query={this.props.query} 
					router={this.props.router} 
					userId={this.props.userId} 
					fromAll={this.props.fromAll}/>

				<div className="header"><Quote quote={this.state.quote}/></div>
				</div>)
	}
});

module.exports = Nav;
