export default Ember.View.extend({
  didInsertElement: function(){
    $(".fotorama").fotorama();
  }
});