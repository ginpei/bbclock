/**
 * Application instance.
 */
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
		var anarog = new AnarogClockView({
			$el: $('#clock-anarog'),
			model:clock
		}).render();

		clock.startAuto();
	}
};
