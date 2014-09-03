var JobCarouselViewItem = Backbone.View.extend({
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

var JobCarouselView = Backbone.View.extend({
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
        this.addCarouselDots();

        var i=0;
        this.collection.each(function(model) {
            var tmp = new JobCarouselViewItem({model: model});
            if(i==0){
                tmp.$el.addClass('active');
            }
            self.$el.append(tmp.$el);
            i++;
        });


        return this;
    },
    addCarouselDots : function(){
        var dotsContainer = this.$el.siblings('.carousel-indicators').empty();
        dotsContainer.empty();
        var cdotsView = '<li data-target="#carousel-example-generic" data-slide-to="{0}"></li>';
        var i=0;
        this.collection.each(function(model) {
            var el = $(__s(cdotsView,i));
            if(i==0){
                el.addClass("active");
            }
            dotsContainer.append(el);
            i++;
        });

    }
});

