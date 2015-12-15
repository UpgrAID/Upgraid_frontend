var React = require('react');
var Backbone = require('backbone');
var Comment = require('../../models/comment');
var Post = require('../../models/post');


var CommentInput = React.createClass({
	getInitialState: function() {
		return {
			post: null,
			description: null}
	},
	_submit: function(e) {
			e.preventDefault();
			var props=this.props;

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
		return(<form onSubmit={this._submit}>
					<textarea id="descriptionInput" placeholder="description"></textarea>
				</form>
			  )
		}
});

module.exports = CommentInput;
