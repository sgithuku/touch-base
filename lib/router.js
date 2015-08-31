// Configuration

Router.configure({
    // layoutTemplate: "main",
    loadingTemplate:'loading',
    notFoundTemplate: 'pageNotFound',
    yieldTemplates: {
        nav: {to: 'nav'},
        footer: {to: 'footer'}
    }
});

AccountsTemplates.configure({
    defaultLayout: 'mainLayout',
});

Router.plugin('ensureSignedIn', {
    except: ['home']
});

// My routes

Router.route('/',function() {
  this.layout('mainLayout');
  this.render('home');
  },
  {
    template: "home",
    name: "home"
  });

Router.route('/private',function() {
  this.layout('privateLayout');
  this.render('private',{
    data: function () { return Everyone.find().fetch() }
  });
  },
  {
    name: "private",
    template: "private"
  });

// Account Template Routes
// AccountsTemplates.configureRoute('changePwd');
// AccountsTemplates.configureRoute('forgotPwd');
// AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
