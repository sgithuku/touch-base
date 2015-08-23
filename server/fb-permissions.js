if (ServiceConfiguration.configurations.find({service: 'facebook'}).count()===0) {
  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: "1896265457266129",
    secret: "1babd523e52a2de95acddb2010c8ed62"
  });
}

// bonus: get some additional profile info from facebook and cache on the user document
Accounts.onCreateUser(function(options,user) {
  var friendList = "read_custom_friendlists";
  check(options, Object);
  check(user, Object);

  options.profile.email = user.services.facebook.email;
  options.profile.facebookId = user.services.facebook.id;
  options.profile.picture = user.services.facebook.picture;

  options.profile.friendList = user.services.facebook.friendList.name;
  options.profile.friendList = user.services.facebook.friendList.list_type;

  user.profile = options.profile;

  return user;
});

/* Source: http://stackoverflow.com/questions/22690393/meteor-accounts-ui-how-to-change-config */
/* https://github.com/maxkferg/meteor-facebook-collections */
/* https://medium.com/@andreneves/extending-meteor-users-300a6cb8e17f */
