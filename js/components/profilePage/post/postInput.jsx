var React = require('react');

var PostInput = React.createClass({
	getInitialState: function(e) {
		return {value: ""}
	},
	_onChange: function(e) {
		this.setState({
			value: e.target.value
		})
	},
	_submit: function(e) {
		e.preventDefault();
		var props=this.props;
		var Post = Backbone.Model.extend({
		url:'https://safe-brook-9891.herokuapp.com/api/posts/',
		initialize: function() {
		console.log('Making Post.')
		}	
	});
		var PostCollection = Backbone.Collection.extend({
			model: Post
			
		});

		var collection = new PostCollection(this.props.data);

		var test = new Post();
		test.set({
			'title':$('#titleInput').val(),
			'description':$('#descriptionInput').val(),
			'goal': 2

		})
		
		test.save({}, {
			success: function(resp) {
				console.log(resp)
				$('#titleInput').val('');
			}
		})
	},
	render:function() {
		return(<form onSubmit={this._submit}>
					<h2>Posts</h2>
					<input id="titleInput" onChange={this.state.value}/>
					<textarea id="descriptionInput"onChange={this.state.value}></textarea>
					<button type="submit">Submit</button>
				</form>
			  )
		}
});

module.exports = PostInput;