var Model = Backbone.Model.extend({
	defaults: {
        'defaultvalue':'somedefault',
        mJobCollection : null,
        gProjCollection : null,                      
        spareProjectsCollection : null,                      
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

        this.gProjCollection = new GithubProjectCollection();
        this.gProjCollection.fetch({
            success: function() {

                //this.loadedModelCallback();
            }
        }).always(onLoadedModels);


        // this.spareProjectsCollection = new SpareTimeProjectsCollection();
        // this.spareProjectsCollection.fetch({
        //     success: function() {

        //         //this.loadedModelCallback();
        //     }
        // }).always(onLoadedModels);

  	},

});
