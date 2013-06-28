(function() {
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
