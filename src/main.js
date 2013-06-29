(function() {
	// update anarog clock
	(function() {
		var c = $('#clock-anarog canvas')[0].getContext('2d');
		c.beginPath();
		c.arc(100, 100, 92, 0, Math.PI*2);
		c.stroke();
	})();

	// Let's Roll!
	$(function() {
		window.app.start();
	});
})();
