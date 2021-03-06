var React = require('react');
var Avatar = require('material-ui/lib/avatar');
var Card = require('material-ui/lib/card/card');
var CardHeader = require('material-ui/lib/card/card-header');
var CardTitle = require('material-ui/lib/card/card-title');
var CardText = require('material-ui/lib/card/card-text');

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
//Material UI cards for post rendering
	render: function() {

		return(
			<div className="postContainer">
					<Card>
						<CardHeader
							style={{background: '#f7f7f7'}}
							title={this.props.title}
      				avatar="../../../../assets/avatar.png"/>
						<CardText>{this.props.description}</CardText>
					</Card>

			</div>
		)

	}
});

module.exports = ProfilePost;

// <p className="postTitle">{this.props.title}</p>
// <p className="postDescription">{this.props.description}</p>
