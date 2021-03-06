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
		return {value: "", themeName: null}
	},
	//assigns theme names to post buttons to assign posts to groups
	componentWillMount: function(){
		switch(this.props.theme){
			case 1:
				this.setState({themeName: 'Skills'});
				break;
			case 2:
				this.setState({themeName: 'Habits'});
				break;
			case 3:
				this.setState({themeName: 'Health'});
				break;
		}
	},
	_submit: function(e) {

			e.preventDefault();
			var props=this.props;
			var collection = new PostCollection(props.data);

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
					props.router.navigate('group/'+props.id,{trigger: true})
				}
			})
		},
	_onChange: function(e) {
		this.setState({
			value: e.target.value
		})
	},

	render:function() {

		return(<div className="profileBtnsDiv">
				<button className="profileBtn"  onClick={this._submit} value={this.props.id}>
					<span style={{color: "lightgrey"}}>Post to </span>
					{this.state.themeName}: {this.props.title}
				</button>
			</div>)
	}
});

module.exports = PostButtons;
