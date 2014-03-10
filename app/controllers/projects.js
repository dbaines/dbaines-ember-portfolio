export default Ember.ArrayController.extend({

  sortAscending: true,

  assignIndex: function () {
    this.map(function (item, index) {
      Ember.set(item, 'index', index + 1);
    });
  }.observes('content.[]', 'firstObject', 'lastObject'),

});