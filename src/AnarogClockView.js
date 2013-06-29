var AnarogClockView = Backbone.View.extend({
	/**
	 * Cached 2π for calclation.
	 * @type Number
	 */
	PI2: Math.PI*2,

	DEG90: Math.PI/2,

	/**
	 * @see http://backbonejs.org/#View-constructor
	 */
	initialize: function(options) {
		var $el = options.$el;
		this.setElement($el);

		this.model.on('change', this.update, this);

		this.clientWidth = this.el.clientWidth;
		this.clientHeight = this.el.clientHeight;
		this.radius = Math.min(this.clientWidth, this.clientHeight) / 2;
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
		var d = this.model.toJSON();

		this._clearCanvas(c);
		this._drawOuter(c);
		this._drawHours(c, d.hours);
		this._drawMinutes(c, d.minutes);
		this._drawSeconds(c, d.seconds);
	},

	/**
	 * Returns canvas context.
	 * @returns {CanvasRenderingContext2D}
	 */
	_getContext: function() {
		return this.$el.find('canvas')[0].getContext('2d');
	},

	/**
	 * @param {CanvasRenderingContext2D}
	 */
	_clearCanvas: function(context) {
		context.clearRect(0, 0, this.clientWidth, this.clientHeight);
	},

	/**
	 * @param {CanvasRenderingContext2D}
	 */
	_drawOuter: function(context) {
		context.lineWidth = 1;
		var r = this.radius;
		context.beginPath();
		context.arc(r, r, r*0.9, 0, this.PI2);
		context.stroke();
	},

	_drawHours: function(context, hours) {
		context.lineWidth = 5;
		var ratio = 0.5;
		var progress = hours%12/12;
		this._drawHand(context, ratio, progress);
	},

	_drawMinutes: function(context, minutes) {
		context.lineWidth = 2;
		var ratio = 0.7;
		var progress = minutes/60;
		this._drawHand(context, ratio, progress);
	},

	_drawSeconds: function(context, seconds) {
		context.lineWidth = 1;
		var ratio = 0.8;
		var progress = seconds/60;
		this._drawHand(context, ratio, progress);
	},

	_drawHand: function(context, ratio, progress) {
		var rad = parseInt((this.PI2*(progress||1) - this.DEG90)*100, 0)/100;

		var r = this.radius;
		var l = r * ratio;
		var left = r + l * Math.cos(rad);
		var top  = r + l * Math.sin(rad);
		context.beginPath();
		context.moveTo(r, r);
		context.lineTo(left, top);
		context.stroke();
	}
});
