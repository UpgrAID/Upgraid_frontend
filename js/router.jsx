	var Router = Backbone.Router.extend({
	  initialize: function () {
	    Backbone.history.start({pushState: true});
	  },
	  routes: {
	    "test"
	    "":"index"
	    
	    
	  }
	});

	var router = new Router();
	