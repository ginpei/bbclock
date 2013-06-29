var TimeForm = Backbone.View.extend({
	/**
	 * @see http://backbonejs.org/#View-constructor
	 */
	initialize: function(options) {
		this.setElement(options.$el);
		this.model.on('change', this.update, this);
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
		this.$el[0].reset();
		this.$('[name=mode][value=' + this._getModeValue() + ']')
			.prop('checked', true);
		var m = this.model;
		if (!m.isAuto()) {
			this.$('[name=hours]').val(m.get('hours'));
			this.$('[name=minutes]').val(m.get('minutes'));
			this.$('[name=seconds]').val(m.get('seconds'));
		}
	},

	/**
	 * @returns {Boolean}
	 */
	_getModeValue: function() {
		return (this.model.isAuto() ? 'dynamic' : 'static');
	},

	/**
	 * @see http://backbonejs.org/#View-delegateEvents
	 */
	events: {
		'change [name=mode]': 'onchangeMode',
		'change [name=hours],[name=minutes],[name=seconds]': 'onchangeTime'
	},

	/**
	 * @param {Event} event
	 * @see #events
	 */
	onchangeMode: function(event) {
		var val = $(event.target).closest('[name=mode]').val();
		if (val=='dynamic') {
			this.model.startAuto();
		}
		else {
			this.model.stopAuto();
		}
	},

	/**
	 * @param {Event} event
	 * @see #events
	 */
	onchangeTime: function(event) {
		this.model.set({
			hours: this.$('[name=hours]').val(),
			minutes: this.$('[name=minutes]').val(),
			seconds: this.$('[name=seconds]').val()
		});
	}
});
