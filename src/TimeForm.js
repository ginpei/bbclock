var TimeForm = Backbone.View.extend({
	initialize: function(options) {
		this.setElement(options.$el);
		this.model.on('change', this.update, this);
	},

	render: function() {
		this.update();
		return this;
	},

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

	_getModeValue: function() {
		return (this.model.isAuto() ? 'dynamic' : 'static');
	},

	events: {
		'change [name=mode]': 'onchangeMode',
		'change [name=hours],[name=minutes],[name=seconds]': 'onchangeTime'
	},

	onchangeMode: function(event) {
		var val = $(event.target).closest('[name=mode]').val();
		if (val=='dynamic') {
			this.model.startAuto();
		}
		else {
			this.model.stopAuto();
		}
	},

	onchangeTime: function(event) {
		this.model.set({
			hours: this.$('[name=hours]').val(),
			minutes: this.$('[name=minutes]').val(),
			seconds: this.$('[name=seconds]').val()
		});
	}
});
