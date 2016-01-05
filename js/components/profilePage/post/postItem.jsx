var React = require('react');
var Post = require('./post.jsx');

var PostItem = React.createClass({

	render: function() {
		var props=this.props;
			return(<div id="postContainer">
					{this.props.posts.map(function(obj){
						return(<Post key={obj.id} addInput={props.addInput} title={obj.title} description={obj.description} posts={props.posts} groupId={obj.id} author={obj.user} postId = {obj.id} comments ={obj.comment_set} username={this.props.username}/>)
					})}
					</div>
				)


	}
});

module.exports = PostItem;
