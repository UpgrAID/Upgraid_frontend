var React = require('react');
var ReactDOM=require('react-dom');
var Avatar = require('material-ui/lib/avatar');
var Card = require('material-ui/lib/card/card');
var CardHeader = require('material-ui/lib/card/card-header');
var CardTitle = require('material-ui/lib/card/card-title');
var CardText = require('material-ui/lib/card/card-text');
var CommentApp = require('../../../components/groupPage/comments/commentApp.jsx');
var Timeago = require('timeago-words');

var Post = React.createClass({
	getInitialState: function(){
		return {
			postedAt: this.props.posted
		}
	},
	componentWillMount: function(){
		var dateObj = new Date(this.props.posted)
		this.setState({postedAt: Timeago(dateObj)});
	},

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

		var collection = new PostCollection(this.props.posts);
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
				<Card>
					<CardHeader
							style={{background: '#AAEDEA',
									width: '570px'}}
      				title={this.props.author + ' Posted: ' + this.state.postedAt}
      				subtitle={this.props.title}
      				avatar="../../../../assets/avatar1.png"/>
						<CardText>{this.props.description}</CardText>
				</Card>
				<CommentApp postId = {this.props.postId} comments={this.props.comments} username={this.props.username} />
			</div>
		)

	}
});

module.exports = Post;


