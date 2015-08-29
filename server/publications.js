// Connect to the user
allUsers = new Meteor.Collection('allUsers');

Meteor.publish('allUsers', function(){
    return Meteor.users.find().fetch();
});
