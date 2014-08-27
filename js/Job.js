var Job = Backbone.Model.extend({
    defaults: {
    	id : -1,
        companyName: 'none'
    },
	initialize: function(){
		__("{0} => {1}", this.get('id'), this.get('companyName'));
	}
});
