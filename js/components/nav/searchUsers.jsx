var React = require('react');
var FoundUsers = require('./foundUsers.jsx');


var SearchUsers = React.createClass({
	getIntialState: function(){
		open: false
	},
	//accepts single input characters and searches for matches in user list, removing non-matches
	_doSearch:function(){
        var query=this.refs.searchInput.value; // this is the search text
        this.props.doSearch(query);
    },
	_close:function() {
		$('#userModal').hide();

	},
	_look:function() {
		$('#userModal').show();
	},

	render:function() {
		var props=this.props;
		return(
			<div>
				<input className="searchUsers" ref="searchInput" placeholder="Search Users..." onClick={this._look} onChange={this._doSearch} value={this.props.query}/>
				<div id="userModal">
					<span id="closeModal" onClick={this._close}></span>
					<div>
						{this.props.users.map(function(obj){
							return (
								<FoundUsers key={obj.id} username={obj.username} id={obj.id} router={props.router}/>
							)
						})}
					</div>
				</div>
			</div>)
	}
});

module.exports = SearchUsers;
