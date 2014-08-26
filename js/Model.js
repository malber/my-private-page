function Model(x_cbk){


	var Job = Backbone.Model.extend({
	    defaults: {
	        companyName: 'none',
	    }
	});



	var JobCollection = Backbone.Collection.extend({
	    model: Job,
	    url:"models/JobCollection.json",

	});

	var jCollection = new JobCollection();
	jCollection.fetch({ url: "models/JobCollection.json", 
		success: function() {
		g_model.jobs = jCollection;
		x_cbk();
		}
	});


	// this.id = x_mid;
	// this.getId = function(){ return this.id};
}
