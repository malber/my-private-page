// Main app entry point
$(document).ready(function() {
	// First of all, run tests
	runTests();
	onAppLaunch();

	__("Started {0} without errors", "myApp");
});

var g_model = {};

function onAppLaunch(){
	var Job = Backbone.Model.extend({
	    defaults: {
	        companyName: 'none',
	    }

	});


	var fc = new Job({ id: 1, companyName: 'Fastcom' });
	var abl = new Job({ id: 2, companyName: 'Ableton' });

	var JobCollection = Backbone.Collection.extend({
	    model: Job,
	    url:"models/JobCollection.json",

	});
	 

	var jCollection = new JobCollection();
	jCollection.fetch({ url: "models/JobCollection.json", success: function() {
		g_model.jobs = jCollection;
		onLoadedModels();
	}});





}

function onLoadedModels(){
	var template = _.template($('#job-list-template').html(), { jobs: g_model.jobs.models });
	$(".content").html(template);

	return;
	var jobArray = [fc, abl];
	var jobs = new JobCollection(jobArray);  


}



