var React = require('react');
var LikeBtn = require('./likeBtn.jsx');
var Store = require('../../../store.js')
var Comment = React.createClass({

	render:function(){
		console.log('this.props.data',this.props.data)
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
