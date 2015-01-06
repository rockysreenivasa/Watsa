(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./app.js":2}],2:[function(require,module,exports){
/**
 * scripts/app.js
 *
 * This is a sample CommonJS module.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';

function App() {
  console.log('app initialized');
}

module.exports = App;

App.prototype.beep = function () {
  console.log('boop');
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuL2FwcC9zY3JpcHRzL21haW4uanMiLCIvaG9tZS9yYWtlc2gvd2F0c2FBcHAvYXBwL3NjcmlwdHMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIHNjcmlwdHMvbWFpbi5qc1xuICpcbiAqIFRoaXMgaXMgdGhlIHN0YXJ0aW5nIHBvaW50IGZvciB5b3VyIGFwcGxpY2F0aW9uLlxuICogVGFrZSBhIGxvb2sgYXQgaHR0cDovL2Jyb3dzZXJpZnkub3JnLyBmb3IgbW9yZSBpbmZvXG4gKiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBcHAgPSByZXF1aXJlKCcuL2FwcC5qcycpO1xuXG52YXIgYXBwID0gbmV3IEFwcCgpO1xuXG5hcHAuYmVlcCgpO1xudmFyIEFwcFJvdXRlciA9IEJhY2tib25lLlJvdXRlci5leHRlbmQoe1xuXG4gICAgcm91dGVzOiB7XG4gICAgICAgIFwiXCIgICAgICAgICAgICAgICAgICA6IFwiaG9tZVwiLFxuICAgICAgICBcImV2ZW50c1wiXHQ6IFwibGlzdFwiLFxuICAgICAgICBcImV2ZW50cy9wYWdlLzpwYWdlXCJcdDogXCJsaXN0XCIsXG4gICAgICAgIFwiZXZlbnRzL2FkZFwiICAgICAgICAgOiBcImFkZEV2ZW50XCIsXG4gICAgICAgIFwiZXZlbnRzLzppZFwiICAgICAgICAgOiBcImV2ZW50RGV0YWlsc1wiLFxuICAgICAgICBcImFib3V0XCIgICAgICAgICAgICAgOiBcImFib3V0XCJcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhlYWRlclZpZXcgPSBuZXcgSGVhZGVyVmlldygpO1xuICAgICAgICAkKCcuaGVhZGVyJykuaHRtbCh0aGlzLmhlYWRlclZpZXcuZWwpO1xuICAgIH0sXG5cbiAgICBob21lOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhvbWVWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLmhvbWVWaWV3ID0gbmV3IEhvbWVWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI2NvbnRlbnQnKS5odG1sKHRoaXMuaG9tZVZpZXcuZWwpO1xuICAgICAgICB0aGlzLmhlYWRlclZpZXcuc2VsZWN0TWVudUl0ZW0oJ2hvbWUtbWVudScpO1xuICAgIH0sXG5cblx0bGlzdDogZnVuY3Rpb24ocGFnZSkge1xuICAgICAgICB2YXIgcCA9IHBhZ2UgPyBwYXJzZUludChwYWdlLCAxMCkgOiAxO1xuICAgICAgICB2YXIgZXZlbnRMaXN0ID0gbmV3IEV2ZW50Q29sbGVjdGlvbigpO1xuICAgICAgICBldmVudExpc3QuZmV0Y2goe3N1Y2Nlc3M6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKFwiI2NvbnRlbnRcIikuaHRtbChuZXcgZXZlbnRMaXN0Vmlldyh7bW9kZWw6IGV2ZW50TGlzdCwgcGFnZTogcH0pLmVsKTtcbiAgICAgICAgfX0pO1xuICAgICAgICB0aGlzLmhlYWRlclZpZXcuc2VsZWN0TWVudUl0ZW0oJ2hvbWUtbWVudScpO1xuICAgIH0sXG5cbiAgICB3aW5lRGV0YWlsczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCh7X2lkOiBpZH0pO1xuICAgICAgICBldmVudHMuZmV0Y2goe3N1Y2Nlc3M6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKFwiI2NvbnRlbnRcIikuaHRtbChuZXcgRXZlbnRWaWV3KHttb2RlbDogZXZlbnRzfSkuZWwpO1xuICAgICAgICB9fSk7XG4gICAgICAgIHRoaXMuaGVhZGVyVmlldy5zZWxlY3RNZW51SXRlbSgpO1xuICAgIH0sXG5cblx0YWRkV2luZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgpO1xuICAgICAgICAkKCcjY29udGVudCcpLmh0bWwobmV3IEV2ZW50Vmlldyh7bW9kZWw6IHdpbmV9KS5lbCk7XG4gICAgICAgIHRoaXMuaGVhZGVyVmlldy5zZWxlY3RNZW51SXRlbSgnYWRkLW1lbnUnKTtcblx0fSxcblxuICAgIGFib3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5hYm91dFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvdXRWaWV3ID0gbmV3IEFib3V0VmlldygpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNjb250ZW50JykuaHRtbCh0aGlzLmFib3V0Vmlldy5lbCk7XG4gICAgICAgIHRoaXMuaGVhZGVyVmlldy5zZWxlY3RNZW51SXRlbSgnYWJvdXQtbWVudScpO1xuICAgIH1cblxufSk7XG5cbnV0aWxzLmxvYWRUZW1wbGF0ZShbJ0hvbWVWaWV3JywgJ0hlYWRlclZpZXcnLCAnRXZlbnRWaWV3JywgJ0V2ZW50TGlzdEl0ZW1WaWV3JywgJ0Fib3V0VmlldyddLCBmdW5jdGlvbigpIHtcbiAgICBhcHAgPSBuZXcgQXBwUm91dGVyKCk7XG4gICAgQmFja2JvbmUuaGlzdG9yeS5zdGFydCgpO1xufSk7IiwiLyoqXG4gKiBzY3JpcHRzL2FwcC5qc1xuICpcbiAqIFRoaXMgaXMgYSBzYW1wbGUgQ29tbW9uSlMgbW9kdWxlLlxuICogVGFrZSBhIGxvb2sgYXQgaHR0cDovL2Jyb3dzZXJpZnkub3JnLyBmb3IgbW9yZSBpbmZvXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnNvbGUubG9nKCdhcHAgaW5pdGlhbGl6ZWQnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cbkFwcC5wcm90b3R5cGUuYmVlcCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coJ2Jvb3AnKTtcbn07XG4iXX0=
