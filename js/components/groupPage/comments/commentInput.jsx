var React = require('react');
var Backbone = require('backbone');

var CommentInput = React.createClass({

	getInitialState: function() {
		return {
			post: null,
			description: null}
	},
	_onChange: function(e) {
		this.setState({
			value: e.target.value

		});

	},
	_submit: function(e) {
			e.preventDefault();
			var props=this.props;
			var Comment = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/comments/',
			initialize: function() {}

		});

		var CommentCollection = Backbone.Collection.extend({
			model: Comment

		});

		var collection = new CommentCollection(props.data);

		var test = new Comment();
			test.set({
				'post': this.props.postId,
				'description':this.state.value,
			})

			test.save({}, {
				success: function(resp) {

					collection.add(resp.toJSON());
					props.addInput(collection.toJSON());
					$('#comment').val('');

				}
			})
		},

	render:function() {
		return(<form onSubmit={this._submit}>
					<input className="commentField" onChange={this._onChange} placeholder="Add a comment"/>
				</form>
			  )
		}
});

module.exports = CommentInput;
