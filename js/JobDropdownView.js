var JobDropdownViewItem = Backbone.View.extend({
    tagName: 'li',
    className: 'JobDropdownViewItem',
    initialize: function() {
        this.template = _.template($('#job-dropdown-item-template').html());
        this.render();
    },
    render: function() {
        this.$el.html(this.template({ item: this.model}));
        return this;
    }
});

var JobDropdownView = Backbone.View.extend({
    el: '#JobDropdownView',
    tagName: 'ul',
    className: 'todolist',
    initialize: function() {
        // No template for this class
        this.template = _.template($('#job-dropdown-template').html());
        this.render();
    },
    render: function() {
        self = this;
        this.$el.empty();
//        this.$el.append(this.template());
        this.collection.each(function(model) {
            var a = new JobDropdownViewItem({model: model});
            self.$el.append(a.$el);
        });
        return this;
    }
});

