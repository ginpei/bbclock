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

