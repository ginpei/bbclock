var AnarogClockView = Backbone.View.extend({
	/**
	 * @see http://backbonejs.org/#View-constructor
	 */
	initialize: function(options) {
		var $el = options.$el;
		this.setElement($el);
	},

	/**
	 * @see http://backbonejs.org/#View-render
	 * @returns {Backbone.View}
	 */
	render: function() {
		this.update();
		return this;
	},

	/**
	 * Update DOM without rebuilding.
	 */
	update: function() {
		var c = this._getContext();
		c.beginPath();
		c.arc(100, 100, 92, 0, Math.PI*2);
		c.stroke();
	},

	/**
	 * Returns canvas context.
	 * @returns {CanvasRenderingContext2D}
	 */
	_getContext: function() {
		return this.$el.find('canvas')[0].getContext('2d');
	}
});
