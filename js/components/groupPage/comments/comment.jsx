var React = require('react');
var LikeBtn = require('./likeBtn.jsx');
var Store = require('../../../store.js')

//Renders the comments and passes the username of the user who make the comment.
//A like button is rendered here as well...A count is passed and an id as props.
var Comment = React.createClass({

	render:function(){

		var test=this.props.data.map(function(obj){
			return(
				<p className="commentBox" key={obj.id}>
					<span className="commenter">{Store.data.username}</span>{obj.description}
					<span className="likeBtnSpan">
						<LikeBtn likeCount={obj.commentlike_set} id={obj.id}/>
					</span>

				</p>)
		})
		return(<div>{test}</div>)
	}
});

module.exports = Comment;
