var JobCarouselViewItem = Backbone.View.extend({
    tagName: 'div',
    className: 'item jobCarouselItem',
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

    injectTemplate : function(){
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

    stopSliding : function(){
        this.$el.carousel({
            interval: false
        });
    },

    render: function() {
        this.injectTemplate();
//        this.addCarouselDots();
        this.addCarouselElements();
        this.stopSliding();
        return this;
    },
    addCarouselDots : function(){
        self = this;
        var dotsContainer = this.$el.children('.carousel-indicators').empty();
        var cdotsView = '<li data-target="#{0}" data-slide-to="{1}"></li>';
        var i=0;
        this.collection.each(function(model) {
            var el = $(__s(cdotsView,self.$el.attr('id'),i));
            if(i==0){
                el.addClass("active");
            }
            dotsContainer.append(el);
            i++;
        });

    }
});

