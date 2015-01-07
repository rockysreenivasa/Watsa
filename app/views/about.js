//var Backbone = require('backbone');
window.AboutView = Backbone.View.extend({

    initialize:function () {
        this.render();
    },

    render:function () {
        $(this.el).html(this.templates());
        return this;
    }

});