var GithubDropdownViewItem = Backbone.View.extend({
    tagName: 'li',
    className: 'GithubDropdownViewItem',
    initialize: function() {
        this.template = _.template($('#github-dropdown-item-template').html());
        this.render();
    },
    render: function() {
        this.$el.html(this.template({ item: this.model}));
        return this;
    }
});

var GithubDropdownView = Backbone.View.extend({
    el: '#GithubDropdownView',
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
        this.collection.each(function(model) {
            var tmp = new GithubDropdownViewItem({model: model});
            self.$el.append(tmp.$el);
        });
        return this;
    }
});

