var React = require('react');

var ProfileInput = React.createClass({
	render:function() {
		return(
			<form id="newPostInputProfile" onSubmit={this._submit}>
					
					<input id="postProfile" placeholder="Add New Post - Title"/>
					<textarea id="descriptionProfile" placeholder="Add Description"></textarea>
					
			</form>
			  )
		}
})

	


module.exports = ProfileInput;