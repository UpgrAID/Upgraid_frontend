var React = require('react');

var Post = Backbone.Model.extend({
		url:'https://safe-brook-9891.herokuapp.com/api/posts/',
		initialize: function() {
		}
	});
var PostCollection = Backbone.Collection.extend({
			model: Post
		});

var PostInput = React.createClass({
	getInitialState: function(e) {
		return {value: ""}
	},
	_submit: function(e) {
			e.preventDefault();
			var props=this.props;


			var collection = new PostCollection(this.props.data);

			var test = new Post();
			test.set({
				'title':$('#titleInput').val(),
				'description':$('#descriptionInput').val(),
				'group': this.props.groupId

			})

			test.save({}, {
				success: function(resp) {

					collection.add(resp);
					props.addInput(collection.toJSON());
					$('#titleInput').val('');
					$('#descriptionInput').val('');
				}
			})
		},
	_onChange: function(e) {
		this.setState({
			value: e.target.value
		})
	},

	render:function() {
		return(
			<form id="newPostInput" onSubmit={this._submit}>
					<h2>Posts</h2>
					<input id="titleInput" placeholder="title"/>
					<textarea id="descriptionInput" placeholder="description"></textarea>
					<button  id="postBtn" type="submit" onSubmit={this._submit}>Submit</button>
			</form>
			  )
		}
});

module.exports = PostInput;
