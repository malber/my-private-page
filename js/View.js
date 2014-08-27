View = Backbone.View.extend({
	defaults: {
        mjobDropdownView : null,
        mjobMainBodyView : null
	},
    initialize: function(){
        this.mjobDropdownView = new JobDropdownView({collection : g_model.mJobCollection});
        this.mjobMainBodyView = new JobMainBodyView({collection : g_model.mJobCollection});
    	// Here we have to load all required views
        this.render();
    },
    render: function(){
    	// Here nothing is required

    },
});


