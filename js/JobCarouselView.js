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

    el: '#JobCarouselViewContainer',
    tagName: 'ul',
    className: 'todolist',
    slidingPart : null,

    initialize: function() {
        this.template = _.template($('#job-carousel-template').html());
        this.render();
    },

    createCarouselAndSetTransitionTime : function(){
        this.$el.carousel({interval : false});
        this.$el.html(this.template());
        this.slidingPart = this.$el.children(".carousel-inner");
    },

    addCarouselElements: function(){
        self = this;

        
        this.slidingPart.empty();
        var i=0;
        this.collection.each(function(model) {
            var tmp = new JobCarouselViewItem({model: model});
            if(i==0){
                tmp.$el.addClass('active');
            }
            self.slidingPart.append(tmp.$el);
            i++;
        });
    },

    render: function() {
        this.createCarouselAndSetTransitionTime();
        this.addCarouselElements();
        this.addCarouselDots();
        return this;
    },
    addCarouselDots : function(){
        var dotsContainer = this.slidingPart.siblings('.carousel-indicators').empty();
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

