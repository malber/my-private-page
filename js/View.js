function View(){
	var template = _.template($('#job-list-template').html(), { jobs: g_model.jobs.models });
	$(".content").html(template);
}