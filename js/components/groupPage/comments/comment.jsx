var React = require('react');
var LikeBtn = require('./likeBtn.jsx');
var Comment = React.createClass({

	render:function(){
	
		var test=this.props.data.map(function(obj){
			return(
				<p className="commentBox" key={obj.id}>
					<span className="commenter">{obj.user}: </span>{obj.description}
					<span className="likeBtn">
						<LikeBtn likeCount={obj.commentlike_set} id={obj.id}/>
					</span>

				</p>)
		})
		return(<div>{test}</div>)
	}
});

module.exports = Comment;
