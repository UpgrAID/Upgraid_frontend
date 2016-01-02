var React = require('react');

var Test = require('./test.jsx')
var SearchUsers = React.createClass({
	_doSearch:function(){
        var query=this.refs.searchInput.value; // this is the search text
        this.props.doSearch(query);
    },
	_close:function() {
		$('#userModal').hide();

	},

	_look: function() {
		$('#userModal').show();
	},

	render:function() {
		var props=this.props;
		return(<div>

				<input id="searchUsers" ref="searchInput" onClick={this._look} onChange={this._doSearch} value={this.props.query}/>
				<div id="userModal">
					<span id="closeModal" onClick={this._close}>X</span>
					<ul>
						{this.props.users.map(function(obj){
							return(<Test key={obj.id} username={obj.username} id={obj.id} router={props.router}/>)
						})}

					</ul>
				</div>
			</div>)
	}
});

module.exports = SearchUsers;
