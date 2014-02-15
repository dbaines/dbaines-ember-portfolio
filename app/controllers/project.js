var ProjectController = Ember.ObjectController.extend({
  needs: 'projects',
  init: function(){
    $(".fotorama").fotorama();
  },
  actions: {
    goToNext: function(){
      // console.log( "goToNextTest", this.get("model") );
    },
    goHome: function(){
      this.transitionToRoute("/");
    }
  }
});

export default ProjectController;