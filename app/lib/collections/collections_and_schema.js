var Schemas = {};

Schemas.Services = new SimpleSchema({
	name: {
		type: String,
		label: "Service Name"
	},
	image_url: {
		type: String,
		label: "Image Descr. URL"
	},
	details: {
		type: String,
		label: "Service Details"
	}
});

Schemas.Staff_member = new SimpleSchema({
	first_name: {
		type: String,
		label: "Staff First Name"
	},
	last_name: {
		type: String,
		label: "Staff Last Name"
	},
	picture_url: {
		type: String,
		label: "Profile Pic URL"
	},
	description: {
		type: String,
		label: "Staff Description"
	},
	skill_tags: {
		type: [String],
		label: "List of 'skill' tags"
	}
});

Schemas.Staff = new SimpleSchema({
	staff_member: {
		type: [Schemas.Staff_member]
	}
});

Schemas.Message = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	phone_number: {
		type: String,
		label: "Phone Number"
	},
	email: {
		type: String,
		label: "Email"
	},
	message: {
		type: String,
		label: "Message"
	}
});

Schemas.Messages = new SimpleSchema({
	messages: {
		type: [Schemas.Message],
		label: "Client Message"
	}
});

// Define mongodb collections
Services = new Mongo.Collection("services")
Staff = new Mongo.Collection("staff");
Messages = new Mongo.Collection("messages");

// Attach schemas to collections.
Services.attachSchema(Schemas.Services);
Staff.attachSchema(Schemas.Staff);
Messages.attachSchema(Schemas.Message);