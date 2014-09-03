View = Backbone.View.extend({
	defaults: {
        mjobDropdownView : null,
        mjobCarouselView : null,
        ghubDropdownView : null,
        spareProjectsView : null,
	},
    initialize: function(){
    	// Here we have to load all required views
        this.render();
    },
    createSyncViews : function(){
        this.mjobDropdownView = new JobDropdownView({collection : g_model.mJobCollection});
        this.mjobCarouselView = new JobCarouselView({collection : g_model.mJobCollection});
    },
    createAsyncViews : function(){
        this.ghubDropdownView = new GithubDropdownView({collection : g_model.gProjCollection});
//        this.spareProjectsView = new SpareTimeProjectsListView({collection : g_model.spareProjectsCollection});
    },
    render: function(){
    	// Here nothing is required

    },
});


