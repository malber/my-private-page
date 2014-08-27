View = Backbone.View.extend({
	defaults: {
        mjobDropdownView : null,
        mjobMainBodyView : null,
        ghubDropdownView : null
	},
    initialize: function(){
        this.mjobDropdownView = new JobDropdownView({collection : g_model.mJobCollection});
        this.mjobMainBodyView = new JobMainBodyView({collection : g_model.mJobCollection});
        this.ghubDropdownView = new GithubDropdownView({collection : g_model.gProjCollection});
    	// Here we have to load all required views
        this.render();
    },
    render: function(){
    	// Here nothing is required

    },
});


