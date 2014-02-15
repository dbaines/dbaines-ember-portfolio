export default Ember.Route.extend({
  model: function() {
    return this.store.find("projects");
  },
  activate: function(params){
    $(document).attr('title', 'David Baines - South Australian Web Developer');
  }
});