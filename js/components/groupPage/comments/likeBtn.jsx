var React = require('react');

var LikeBtn = React.createClass({
	getInitialState: function() {

	},
	render:function(){
		console.log('a',this.props.likeCount.length)
		return(<button><span className='likeCount'>{this.props.likeCount.length}</span> <span className="likeWord">Like</span></button>)
	}
});

module.exports= LikeBtn;