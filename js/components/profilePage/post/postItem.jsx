var React = require('react');
var Post = require('./post.jsx');
var PostItem = React.createClass({
	
	render: function() {
		var props=this.props;
			return(<div id="postContainer">
					{this.props.data.map(function(obj){
						return(<Post addInput={props.addInput} title={obj.title} description={obj.description} datas={props.data} id={obj.id}/>)
					})}
					</div>
				)
		
		
	}
});

module.exports = PostItem;