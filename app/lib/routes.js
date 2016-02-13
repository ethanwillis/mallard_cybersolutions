FlowRouter.route('/', {
	action:function(params, query_params) {
		// Pass in a header template, content template, and footer template
		// to main_layout
		BlazeLayout.render('main_layout', {top: "header", middle: "home", bottom: "footer"});
	},
	name: "home"
});

FlowRouter.route('/services', {
	action:function(params, query_params) {
		BlazeLayout.render('main_layout', {top: "header", middle: "services", bottom: "footer"});
	},
	name: "services"
});

FlowRouter.route('/about', {
	action:function(params, query_params) {
		BlazeLayout.render('main_layout', {top: "header", middle: "about", bottom: "footer"});
	},
	name: "about"
});

FlowRouter.route('/contact', {
	action:function(params, query_params) {
		BlazeLayout.render('main_layout', {top: "header", middle: "contact", bottom: "footer"});
	},
	name: "contact"
});

FlowRouter.route('/faq', {
	action:function(params, query_params) {
		BlazeLayout.render('main_layout', {top: "header", middle: "faq", bottom: "footer"});
	},
	name: "faq"
});
