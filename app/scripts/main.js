/**
 * scripts/main.js
 *
 * This is the starting point for your application.
 * Take a look at http://browserify.org/ for more info
 * */

'use strict';

var App = require('./app.js');

var app = new App();

app.beep();
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
        var eventList = new EventCollection();
        eventList.fetch({success: function(){
            $("#content").html(new eventListView({model: eventList, page: p}).el);
        }});
        this.headerView.selectMenuItem('home-menu');
    },

    wineDetails: function (id) {
        var event = new Event({_id: id});
        events.fetch({success: function(){
            $("#content").html(new EventView({model: events}).el);
        }});
        this.headerView.selectMenuItem();
    },

	addWine: function() {
        var event = new Event();
        $('#content').html(new EventView({model: wine}).el);
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