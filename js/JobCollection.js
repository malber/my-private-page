var JobCollection = Backbone.Collection.extend({
	model: Job,
	url: "",
	initialize: function(x_url){
    	// Do something here
		this.url = x_url;
  	},
});