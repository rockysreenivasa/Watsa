//var Backbone = require('backbone');
window.HomeView = Backbone.View.extend({

    initialize:function () {
        this.render();
    },

    render:function () {
        $(this.el).html(this.templates());
        return this;
    }

});