View = Backbone.View.extend({
	defaults: {
		mjobDropdownViewItem : null
	},
    initialize: function(){
        this.mjobDropdownView = new JobDropdownView({collection : g_model.mJobCollection});
        // this.mjobDropdownViewItem = new JobDropdownViewItem({model : g_model.mJobCollection.models[0]});

    	// Here we have to load all required views
        this.render();
    },
    render: function(){
//  		this.mjobDropdownView.render();
    	// Here nothing is required

    },
});


