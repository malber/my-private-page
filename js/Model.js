var Model = Backbone.Model.extend({
	defaults: {
        'defaultvalue':'somedefault',
        mJobCollection : null                         
    },
    // urlRoot: '/api/m',
    loadedModelCallback : null,

    // Constructor
    initialize: function(){
    	// Do something here
    	this.mJobCollection = new JobCollection("models/JobCollection.json");
    	this.mJobCollection.fetch({
			success: function() {
				//this.loadedModelCallback();
			}
		}).always(onLoadedModels);
  	},

});
