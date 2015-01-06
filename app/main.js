var $ = require('jquery-untouched');
var Backbone = require('backbone');
Backbone.$ = $;

var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home",
        "events"	: "list",
        "events/page/:page"	: "list",
        "events/add"         : "addEvent",
        "events/:id"         : "eventDetails",
        "about"             : "about"
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
    },

    home: function (id) {
        if (!this.homeView) {
            this.homeView = new HomeView();
        }
        $('#content').html(this.homeView.el);
        this.headerView.selectMenuItem('home-menu');
    },

	list: function(page) {
        var p = page ? parseInt(page, 10) : 1;
        var eventList = new eventCollection();
        eventList.fetch({success: function(){
            $("#content").html(new eventListView({model: eventList, page: p}).el);
        }});
        this.headerView.selectMenuItem('home-menu');
    },

    eventDetails: function (id) {
        var event = new event({_id: id});
        event.fetch({success: function(){
            $("#content").html(new eventView({model: event}).el);
        }});
        this.headerView.selectMenuItem();
    },

	addEvent: function() {
        var event = new event();
        $('#content').html(new eventView({model: event}).el);
        this.headerView.selectMenuItem('add-menu');
	},

    about: function () {
        if (!this.aboutView) {
            this.aboutView = new AboutView();
        }
        $('#content').html(this.aboutView.el);
        this.headerView.selectMenuItem('about-menu');
    }

});

utils.loadTemplate(['HomeView', 'HeaderView', 'EventView', 'EventListItemView', 'AboutView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});