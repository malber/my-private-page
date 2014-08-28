var SpareTimeProjectsViewItem = Backbone.View.extend({
    tagName: 'li',
    className: 'SpareTimeProjectsViewItem',
    initialize: function() {
        this.template = _.template($('#SpareTimeProjects-item-template').html());
        this.render();
    },
    render: function() {
        this.$el.html(this.template({ item: this.model}));
        return this;
    }
});

var SpareTimeProjectsListView = Backbone.View.extend({
    el: '#SpareTimeProjectsListViewContainer',
    tagName: 'ul',
    className: 'SpareTimeProjectsListView',
    initialize: function() {
        this.template = _.template($('#SpareTimeProjects-list-template').html());
        this.render();
    },
    render: function() {
        self = this;
        this.$el.empty();
        this.$el.append(this.template());
        this.collection.each(function(model) {
            var tmp = new SpareTimeProjectsViewItem({model: model});
            self.$el.append(tmp.$el);
        });
        return this;
    }
});

