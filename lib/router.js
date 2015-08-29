
FlowRouter.route('/', {
  name: "home",
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {
      nav: "nav",
      main: "home",
      footer: "footer",
    });
  }
});

FlowRouter.route('/private', {
  name: "private",
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params, queryParams) {
    BlazeLayout.render('privateLayout', {
      footer: "footer",
      main: "private",
      nav: "nav"
    });
  }
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('mainLayout', {
      footer: "footer",
      main: "pageNotFound",
      nav: "nav"
    });
  }
};

FlowRouter.subscriptions = function() {
  this.register('allUsers', Meteor.subscribe('allUsers'));
};


// Account Template Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn', {
  name: 'pippo'
});
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
