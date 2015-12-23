var React = require('react');

var Post = Backbone.Model.extend({
		url:'https://safe-brook-9891.herokuapp.com/api/posts/',
		initialize: function() {
		}
	});
var PostCollection = Backbone.Collection.extend({
			model: Post
		});

var PostButtons = React.createClass({
	getInitialState: function(e) {
		return {value: ""}
	},
	_submit: function(e) {
			e.preventDefault();
			var props=this.props;
			console.log(this.props);

			var collection = new PostCollection(this.props.data);

			var test = new Post();
			test.set({
				'title':$('#postProfile').val(),
				'description':$('#descriptionProfile').val(),
				'group': this.props.id

			})

			test.save({}, {
				success: function(resp) {

					collection.add(resp, {at: 0});
					props.addInput(collection.toJSON());
					$('#postProfile').val('');
					$('#descriptionProfile').val('');
				}
			})
		},
	_onChange: function(e) {
		this.setState({
			value: e.target.value
		})
	},

	render:function() {

		return(<div><button  onClick={this._submit} value={this.props.id}>{this.props.id}</button></div>)
	}
});

module.exports = PostButtons;