var React = require('react');

var Post = Backbone.Model.extend({
		url:'https://safe-brook-9891.herokuapp.com/api/posts/',
		initialize: function() {
		}
	});
var PostCollection = Backbone.Collection.extend({
			model: Post
		});

var PostBtns = React.createClass({
	_submit: function(e) {
		e.preventDefault();
		var props=this.props;


		var collection = new PostCollection(this.props.data);

		var test = new Post();
		test.set({
			'title':$('#titleInput').val(),
			'description':$('#descriptionInput').val(),
			'goal': this.props.id

		})

		test.save({}, {
			success: function(resp) {
				
				collection.add(resp);
				props.addInput(collection.toJSON());
				$('#titleInput').val('');
			}
		})
	},
	render: function() {
		
			return(<button value={this.props.id} onClick={this._submit}>Goal</button>)
		
		
	}
});

module.exports = PostBtns;