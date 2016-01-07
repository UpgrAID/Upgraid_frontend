var React = require('react');
var Store = require('../../../store.js')
var LikeBtn = React.createClass({
	getInitialState: function() {
		return({
			count: this.props.likeCount.length,
			like: 'like'
		})
	},
	componentWillMount:function(){
		if(this.props.likeCount.length>1){
			this.setState({
				like: 'likes'
			})
		}

		var  username= Store.data.userName;

		
	},
	_update: function(){
		this.setState({
					count: (this.props.likeCount.length + 1)
				})
	},
	_likeSubmit: function(){
		var Like = Backbone.Model.extend({
			url: 'https://safe-brook-9891.herokuapp.com/api/likes/comments/'
		});
		var LikeCollection = Backbone.Collection.extend({
			url: 'https://safe-brook-9891.herokuapp.com/api/likes/comments/',
			Model: Like
		});
		var like = new Like();
		like.set({
			comment: this.props.id,
			user: Store.data.userName

		});
		var that = this;
		like.save({},{
			success:function(resp) {
				that._update();
			}
		})
	},
	render:function(){
		
		return(<button onClick={this._likeSubmit} className='likeBtn'>
				{(this.state.count=== 0 ? null : 
				
				<span className='likeCount' ref='count' value={this.state.count}>{this.state.count}</span>)}

				<span className="likeWord">{this.state.like}</span>
			</button>)
	}
});

module.exports= LikeBtn;