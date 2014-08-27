var JobDropdownViewItem = Backbone.View.extend({
    el: '#content',
    tagName: 'li',
    className: 'todo',
    initialize: function() {
        this.template = _.template($('#job-dropdown-item-template').html());
        this.render();
    },
    render: function() {
        __(this.$el);
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
        // this.template = _.template($('#job-dropdown-template').html());
        this.render();
    },
    render: function() {
        that = this;
        this.$el.empty();
        // this.$el.append(this.template());
        this.collection.each(function(model) {
            that.$el.append(new JobDropdownViewItem({model: model.toJSON()}));
        });
        return this;
    }
});

