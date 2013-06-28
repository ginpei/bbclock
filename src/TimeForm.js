var TimeForm = Backbone.View.extend({
	initialize: function(options) {
		this.setElement(options.$el);
	},

	render: function() {
		this.$el[0].reset();
		this.$('[name=mode]').filter('[value=' +
			(this.model.isAuto() ? 'dynamic' : 'static') + ']').prop('checked', true);
		return this;
	}
});
