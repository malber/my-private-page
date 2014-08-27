var Job = Backbone.Model.extend({
    defaults: {
    	id : -1,
        companyName: 'none',
        imageUrl : 'images/default.png',
        description: '',
    },
	initialize: function(){
	}
});
