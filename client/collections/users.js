// Add the client subs
Tracker.autorun(function () {
  Meteor.subscribe("everyone", function(){
    console.log(everyone, everyone.find(), everyone.find().fetch());
  });
});

Everyone.initEasySearch('name');

// in client/myapp.js: reactive helper function
Template.listitem.helpers({
  friends: function () {
    return Everyone.find({},{sort:{name:1}});
  }
});
