var ProjectController = Ember.ObjectController.extend({
  needs: ["projects"],
  advanceProject: function(delta) {
    var index,length,projects,currentIndex;

    projects = this.get('projects');
    length = projects.get('length');
    currentIndex = projects.indexOf(this.get('content'));
    index = (currentIndex + delta + length) % length;

    return this.transitionToRoute('project', projects.objectAt(1));
  },
  actions: {
    previous: function(){
      return this.advanceProject(+1);
    },
    next: function(){
      return this.advanceProject(-1);
    },
    goHome: function(){
      this.transitionToRoute("/");
    }
  }
});

export default ProjectController;