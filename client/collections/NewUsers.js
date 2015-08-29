Template.User.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var UserId = FlowRouter.getParam('UserId');
    self.subscribe('list-item', UserId);
  });
});

Template.User.helpers({
  singleUser: function() {
    var UserId = FlowRouter.getParam('UserId');
    var singleUser = .findOne({_id: UserId}) || {};
    return post;
  }
});
