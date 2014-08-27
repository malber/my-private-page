var GithubProjectCollection = Backbone.Collection.extend({
	model: GithubProject,
	url: "https://api.github.com/users/malber/repos",
	initialize: function(){
    	// Do something here
  	},
});