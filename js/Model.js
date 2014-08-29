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
            this.mJobCollection.fetch()
            ).done(onLoadedSyncModels);
    },


    asyncModelsLoad : function(){
        this.gProjCollection.fetch({
            success : function(){
                onLoadedAsyncModels();
            },
            error: function(){
                alert("error loading sync models");
            }
        });

    },

    // Constructor
    initialize: function(){
    	// Do something here
    	this.mJobCollection = new JobCollection();
        this.gProjCollection = new GithubProjectCollection();
        this.asyncModelsLoad();
        this.syncModelsLoad();


        // this.spareProjectsCollection = new SpareTimeProjectsCollection();
        // this.spareProjectsCollection.fetch({
        //     success: function() {

        //         //this.loadedModelCallback();
        //     }
        // }).always(onLoadedModels);

  	},

});
