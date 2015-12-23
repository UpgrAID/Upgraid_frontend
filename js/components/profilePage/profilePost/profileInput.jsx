var React = require('react');

var ProfileInput = React.createClass({
	render:function() {
		return(
			<form id="newPostInputProfile" onSubmit={this._submit}>
					<h2>Posts</h2>
					<input id="postProfile" placeholder="Add New Post - Title"/>
					<textarea id="descriptionProfile" placeholder="Add Description"></textarea>
					<button  id="postBtnProfile" type="submit" onSubmit={this._submit}>Submit</button>
			</form>
			  )
		}
})

	


module.exports = ProfileInput;