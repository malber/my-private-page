View = Backbone.View.extend({
	defaults: {
        mjobDropdownView : null,
        mjobMainBodyView : null,
        ghubDropdownView : null,
        spareProjectsView : null,
	},
    initialize: function(){
    	// Here we have to load all required views
        this.render();
    },
    createViews : function(){
        this.mjobDropdownView = new JobDropdownView({collection : g_model.mJobCollection});
        this.mjobMainBodyView = new JobMainBodyView({collection : g_model.mJobCollection});
        this.ghubDropdownView = new GithubDropdownView({collection : g_model.gProjCollection});
//        this.spareProjectsView = new SpareTimeProjectsListView({collection : g_model.spareProjectsCollection});
    },
    render: function(){
    	// Here nothing is required

    },
});


