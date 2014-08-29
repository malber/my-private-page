var JobMainBodyViewItem = Backbone.View.extend({
    tagName: 'div',
    className: 'item JobMainBodyViewItem',
    initialize: function() {
        this.template = _.template($('#job-mainbody-item-template').html());
        this.render();
    },
    render: function() {
        this.$el.html(this.template({ item: this.model}));
        return this;
    }
});

var JobMainBodyView = Backbone.View.extend({
    el: '#JobCarouselView',
    tagName: 'ul',
    className: 'todolist',
    initialize: function() {
        // No template for this class
        this.render();
    },
    render: function() {
        self = this;
        this.$el.empty();
        // this.$el.append(this.template());
        var i=0;
        this.collection.each(function(model) {
            var tmp = new JobMainBodyViewItem({model: model});
            if(i==0){
                tmp.$el.addClass('active');
            }
            self.$el.append(tmp.$el);
            i++;
        });
        return this;
    }
});

