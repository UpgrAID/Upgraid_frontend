var React = require('react');
var FoundUsers = require('./foundUsers.jsx');
var LeftNav = require('material-ui/lib/left-nav')

var SearchUsers = React.createClass({
	getIntialState: function(){
		open: false
	},
	_doSearch:function(){
        var query=this.refs.searchInput.value; // this is the search text
        this.props.doSearch(query);
    },
	_close:function() {
		$('#userModal').hide();

	},

	_lookToggle: function() {
		this.setState({open: !this.state.open});
	},

	render:function() {
		var props=this.props;
		return(
			<div>
				<input id="searchUsers" ref="searchInput" placeholder="Search Users..." onClick={this._look} onChange={this._doSearch} value={this.props.query}/>
				<LeftNav open={this.state.open} id="userModal">
					<span id="closeModal" onClick={this._close}></span>
					<div>
						{this.props.users.map(function(obj){
							return (
								<FoundUsers key={obj.id} username={obj.username} id={obj.id} router={props.router}/>
							)
						})}

					</div>
				</LeftNav>
			</div>)
	}
});

module.exports = SearchUsers;
