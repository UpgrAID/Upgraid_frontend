var React = require('react');

var Test = require('./test.jsx')
var SearchUsers = React.createClass({

	_close:function() {
		$('#userModal').hide();

	},

	_look: function() {
		$('#userModal').show();
	},

	render:function() {

		return(<div>

				<input id="searchUsers" onClick={this._look} onChange={this.props.filterList}/>
				<div id="userModal">
					<span id="closeModal" onClick={this._close}>X</span>
					<ul>
						{this.props.users.map(function(obj){
							return(<Test key={obj.id} username={obj.username}/>)
						})}

					</ul>
				</div>
			</div>)
	}
});

module.exports = SearchUsers;
