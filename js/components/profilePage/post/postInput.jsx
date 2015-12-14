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
	_onChange: function(e) {
		this.setState({
			value: e.target.value
		})
	},
	_submit: function(e) {
		e.preventDefault();
		var props=this.props;


		var collection = new PostCollection(this.props.data);

		var test = new Post();
		test.set({
			'title':$('#titleInput').val(),
			'description':$('#descriptionInput').val(),
			'goal': 2

		})

		test.save({}, {
			success: function(resp) {
				
				collection.add(resp);
				props.addInput(collection.toJSON());
				$('#titleInput').val('');
			}
		})
	},
	render:function() {
		return(<form onSubmit={this._submit}>
					<h2>Posts</h2>
					<input id="titleInput" placeholder="title"/>
					<textarea id="descriptionInput" placeholder="description"></textarea>
					<button  id="postBtn" type="submit">Submit</button>
				</form>
			  )
		}
});

module.exports = PostInput;
