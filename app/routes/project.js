export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.setProperties({
      model: model,
      projects: this.store.find('projects')
    });
  },
  model: function(params) {
    return this.store.find('projects', params.id);
  }
});