(function() {
	(function() {
		var c = $('#clock-anarog canvas')[0].getContext('2d');
		c.beginPath();
		c.arc(100, 100, 92, 0, Math.PI*2);
		c.stroke();
	})();


	var app = {
		start: function() {
			var clock = new Clock();
			var form = new TimeForm({
				$el: $('#clock-form'),
				model:clock
			}).render();
			var digital = new DigitalClockView({
				$el: $('#clock-digital'),
				model:clock
			}).render();

			clock.startAuto();
		}
	};

	$(function() {
		window.bbclock = app;
		app.start();
	});
})();
