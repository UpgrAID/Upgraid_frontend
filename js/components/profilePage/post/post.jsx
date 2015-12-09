var React = require('react');
var Post = React.createClass({
	_delete: function(e) {
		e.preventDefault();
		props=this.props;

		var Post = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/posts/'+props.id,
			initialize: function() {
			console.log('Making Goal.')
	}
			
		});
		var PostCollection = Backbone.Collection.extend({
			model: Post
			
		});

		var collection = new PostCollection(this.props.datas);
		var item = collection.get(props.id);
		console.log(props.id);
		item.destroy({
			success: function(resp) {
				console.log(resp);
				collection.remove(resp)
				console.log(collection.toJSON());
				props.addInput(collection.toJSON());

			}
		})
	},
	render: function() {
			
			return(<div className="postContainer">
					<p className="postTitle">{this.props.title}</p>
					<p className="postDescription">{this.props.description}</p>
					<button className="delete" onClick={this._delete}>Delete</button>
					</div>
				  )
		
	}
});

module.exports = Post;