var Clock = Backbone.Model.extend({
	defaults: {
		auto: true
	},

	_tmUpdate: null,

	isAuto: function() {
		return this.get('auto');
	},

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

	stopAuto: function() {
		clearInterval(this._tmUpdate);
		this._tmUpdate = null;
		this.set('auto', false);
	},

	updateNow: function() {
		var now = new Date();
		this.set({
			hours: now.getHours(),
			minutes: now.getMinutes(),
			seconds: now.getSeconds()
		});
	}
});

