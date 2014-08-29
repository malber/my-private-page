var Model = Backbone.Model.extend({
	defaults: {
        'defaultvalue':'somedefault',
        mJobCollection : null,
        gProjCollection : null,                      
        spareProjectsCollection : null,                      
    },
    // urlRoot: '/api/m',
    loadedModelCallback : null,


    syncModelsLoad : function(){
        $.when(
            this.mJobCollection.fetch(),
            this.gProjCollection.fetch()
            ).always(onLoadedModels);

    },

    // Constructor
    initialize: function(){
    	// Do something here


    	this.mJobCollection = new JobCollection();
        this.gProjCollection = new GithubProjectCollection();
        this.syncModelsLoad();


        // this.spareProjectsCollection = new SpareTimeProjectsCollection();
        // this.spareProjectsCollection.fetch({
        //     success: function() {

        //         //this.loadedModelCallback();
        //     }
        // }).always(onLoadedModels);

  	},

});
