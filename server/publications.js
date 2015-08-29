allUsers = new Meteor.Collection('allUsers');

Meteor.publish('allUsers', function(){
    return Meteor.users.find({_id:this.userId},);
});
