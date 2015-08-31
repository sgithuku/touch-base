// Add the client subs
Tracker.autorun(function () {
  Meteor.subscribe("everyone", function(){
    console.log(Everyone.find().fetch());
  });
});

Everyone.initEasySearch('name');

// in client/myapp.js: reactive helper function
Template.listitem.helpers({
  friends: function () {
    return Everyone.find({},{sort:{name:1}});
  }
});

Template.listitem.events({
    "click #toggle": function () {
      // Set the checked property to the opposite of its current value
      Everyone.update(this._id, {
        $set: {checked: ! this.checked}
      });
    }
  });
