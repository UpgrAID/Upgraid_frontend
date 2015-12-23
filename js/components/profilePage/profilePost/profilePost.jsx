var React = require('react');
var ProfilePost = React.createClass({

	_delete: function(e) {
		e.preventDefault();
		props=this.props;

			var Post = Backbone.Model.extend({
				url:'https://safe-brook-9891.herokuapp.com/api/posts/'+props.id,
				initialize: function() {
			}

			});
				var PostCollection = Backbone.Collection.extend({
					model: Post
			});

		var collection = new PostCollection(this.props.datas);
		var item = collection.get(props.id);
		item.destroy({
			success: function(resp) {
				collection.remove(resp)
				props.addInput(collection.toJSON());
			}
		})
	},

	render: function() {

		return(
			<div className="postContainer">
						
						<p className="postTitle">{this.props.title}</p>
						<p className="postDescription">{this.props.description}</p>
						
			</div>
		)

	}
});

module.exports = ProfilePost;