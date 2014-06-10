export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.setProperties({
      model: model,
      projects: this.store.find('projects')
    });
    $(".gallery").not(".gallery_init").fotorama().addClass(".gallery_init");
  },

  model: function(params) {
    return this.store.find('projects', params.id);
  },
  activate: function() {
    // document.title = "Super Awesome Article";
  }
});