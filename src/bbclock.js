(function() {
	var Clock = Backbone.Model.extend({
		defaults: {
			auto: true
		},

		_tmUpdate: null,

		startAuto: function() {
			var that = this;
			this._tmUpdate = setInterval(function() {
				that.updateNow();
			}, 250);
			this.set('auto', true);
		},

		updateNow: function() {
			var now = new Date();
			this.set({
				hours: now.getHours(),
				minutes: now.getMinutes(),
				seconds: now.getSeconds()
			});
		}
	});

	var DigitalClockView = Backbone.View.extend({
		initialize: function(options) {
			var $el = options.$el;
			this.setElement($el);
			this.$hours = $el.find('.hours');
			this.$minutes = $el.find('.minutes');
			this.$seconds = $el.find('.seconds');

			this.model.on('change:hours', this.updateHours, this);
			this.model.on('change:minutes', this.updateMinutes, this);
			this.model.on('change:seconds', this.updateSeconds, this);
		},

		updateHours: function(model, hours, options) {
			var text = ('0' + hours).slice(-2);
			this.$hours.text(text);
		},

		updateMinutes: function(model, minutes, options) {
			var text = ('0' + minutes).slice(-2);
			this.$minutes.text(text);
		},

		updateSeconds: function(model, seconds, options) {
			var text = ('0' + seconds).slice(-2);
			this.$seconds.text(text);
		}
	});

	(function() {
		var c = $('#clock-anarog canvas')[0].getContext('2d');
		c.beginPath();
		c.arc(100, 100, 92, 0, Math.PI*2);
		c.stroke();
	})();


	var App = Backbone.View.extend({
		start: function() {
			var clock = new Clock();
			var digital = new DigitalClockView({
				$el: $('#clock-digital'),
				model:clock
			});

			clock.startAuto();
		}
	});

	$(function() {
		var app = window.bbclock = new App();
		app.start();
	});
})();
