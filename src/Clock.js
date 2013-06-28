var Clock = Backbone.Model.extend({
	defaults: {
		auto: true
	},

	_tmUpdate: null,

	startAuto: function() {
		var that = this;
		this._tmUpdate = setInterval(function() {
			that.updateNow();
		}, 250);
		this.set('auto', true);
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

