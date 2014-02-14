export default Ember.Route.extend({
  model: function() {
    // return ['red', 'yellow', 'blue'];
    return this.store.find("websites");
  }
});