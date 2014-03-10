var IndexController = Ember.ArrayController.extend({

  actions: {
    goToProject: function(id){

      var holdThis = this;
      // console.log(this);

      $("body").addClass("transition-to-project");

      // hold our page for a timeout, while we animate
      setTimeout(function(){

        // Transition to next page
        holdThis.transitionToRoute('project', id);
        $("body").removeClass("transition-to-project");

      }, 800);
    }
  }
});

export default IndexController;