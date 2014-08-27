var JobMainBodyViewItem = Backbone.View.extend({
    tagName: 'div',
    className: 'JobMainBodyViewItem',
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
    el: '#JobMainBodyView',
    tagName: 'ul',
    className: 'todolist',
    initialize: function() {
        // No template for this class
        this.render();
    },
    render: function() {
        self = this;
        this.$el.empty();
        __(self);
        // this.$el.append(this.template());
        this.collection.each(function(model) {
            var tmp = new JobMainBodyViewItem({model: model});
            self.$el.append(tmp.$el);
        });
        return this;
    }
});

