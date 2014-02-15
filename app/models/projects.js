// models/projects.js
var Projects = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('category'),
  image_src: DS.attr('string'),
  isArtwork: function(){
    return this.get('category') === 'artwork';
  }.property('category'),
  isWebsite: function(){
    return this.get('category') === 'website';
  }.property('category')
});

Projects.FIXTURES = [
  {
    id: "404-monkey",
    title: "404 Monkey",
    description: "..",
    category: "artwork",
    image_src: "404monkey.jpg"
  },
  {
    id: "afromonkey",
    title: "Afromonkey",
    description: "..",
    category: "artwork",
    image_src: "afromonkey.jpg"
  },
  {
    id: "blade",
    title: "Blade",
    description: "..",
    category: "artwork",
    image_src: "blade.jpg"
  },
  {
    id: "knife-guy",
    title: "Bloody Knife Guy",
    description: "..",
    category: "artwork",
    image_src: "bloodyknifeguyredux_final.jpg"
  },
  {
    id: "website-1",
    title: "Website 1",
    description: "..",
    category: "website",
    image_src: "ninja.jpg"
  }
];

export default Projects;