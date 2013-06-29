var DigitalClockView = Backbone.View.extend({
	/**
	 * @see http://backbonejs.org/#View-constructor
	 */
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

	/**
	 * `.on('change')`
	 * @param {Backbone.Model} model
	 * @param {Number} hours
	 * @param {Object} options
	 */
	updateHours: function(model, hours, options) {
		var text = ('0' + hours).slice(-2);
		this.$hours.text(text);
	},

	/**
	 * `.on('change')`
	 * @param {Backbone.Model} model
	 * @param {Number} minutes
	 * @param {Object} options
	 */
	updateMinutes: function(model, minutes, options) {
		var text = ('0' + minutes).slice(-2);
		this.$minutes.text(text);
	},

	/**
	 * `.on('change')`
	 * @param {Backbone.Model} model
	 * @param {Number} seconds
	 * @param {Object} options
	 */
	updateSeconds: function(model, seconds, options) {
		var text = ('0' + seconds).slice(-2);
		this.$seconds.text(text);
	}
});

