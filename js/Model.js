var Model = Backbone.Model.extend({
	defaults: {
        'defaultvalue':'somedefault',
        mJobCollection : null,
        gProjCollection : null                      
    },
    // urlRoot: '/api/m',
    loadedModelCallback : null,

    // Constructor
    initialize: function(){
    	// Do something here
        __("1");
    	this.mJobCollection = new JobCollection("models/JobCollection.json");
    	this.mJobCollection.fetch({
			success: function() {
				//this.loadedModelCallback();
                __("S1");
			}
        }).always(onLoadedModels);

        this.gProjCollection = new GithubProjectCollection();
        this.gProjCollection.fetch({
            success: function() {
                //this.loadedModelCallback();
                __("S2");
            }
        });
        __("3");


//        onLoadedModels();

  	},

});
