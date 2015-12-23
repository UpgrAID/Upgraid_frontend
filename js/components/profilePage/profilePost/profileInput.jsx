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
				'title':$('#postInput').val(),
				'description':$('#descriptionProfile').val(),
				'group': this.props.groupId

			})

			test.save({}, {
				success: function(resp) {

					collection.add(resp, {at: 0});
					props.addInput(collection.toJSON());
					$('#postInput').val('');
					$('#descriptionProfile').val('');
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
			<form id="newPostInputProfile" onSubmit={this._submit}>
					<h2>Posts</h2>
					<input id="postProfile" placeholder="Add New Post - Title"/>
					<textarea id="descriptionProfile" placeholder="Add Description"></textarea>
					<button  id="postBtnProfile" type="submit" onSubmit={this._submit}>Submit</button>
			</form>
			  )
		}
});

module.exports = PostInput;