AutoForm.hooks({
	insertMessageForm: {
		onSubmit: function(doc) {
			Meteor.call("send_email", doc);
			this.done();
			return false;
		}
	}
})
