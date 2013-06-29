var Clock = Backbone.Model.extend({
	/**
	 * @see http://backbonejs.org/#Model-defaults
	 */
	defaults: {
		auto: true
	},

	/**
	 * ID for setInterval.
	 * @type Number
	 * @see #startAuto
	 * @see #stopAuto
	 */
	_tmUpdate: null,

	/**
	 * @returns {Boolean}
	 */
	isAuto: function() {
		return this.get('auto');
	},

	/**
	 * Update time automatically.
	 * @see stopAuto
	 */
	startAuto: function() {
		if (this._tmUpdate) {
			return;
		}

		var that = this;
		this._tmUpdate = setInterval(function() {
			that.updateNow();
		}, 250);
		this.set('auto', true);
	},

	/**
	 * Stop updating time.
	 * @see startAuto
	 */
	stopAuto: function() {
		clearInterval(this._tmUpdate);
		this._tmUpdate = null;
		this.set('auto', false);
	},

	/**
	 * Set current time.
	 */
	updateNow: function() {
		var now = new Date();
		this.set({
			hours: now.getHours(),
			minutes: now.getMinutes(),
			seconds: now.getSeconds()
		});
	}
});

