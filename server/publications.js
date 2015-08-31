// Connect to the user
Meteor.publish('everyone', function(){
    return Everyone.find();
});
