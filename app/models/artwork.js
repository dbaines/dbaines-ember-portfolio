// models/websites.js
var Artwork = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  image_src: DS.attr('string')
});

Artwork.FIXTURES = [
  {
    id: 1,
    title: "404 Monkey",
    description: "..",
    image_src: "404monkey.jpg"
  },
  {
    id: 2,
    title: "Afromonkey",
    description: "..",
    image_src: "afromonkey.jpg"
  },
  {
    id: 3,
    title: "Blade",
    description: "..",
    image_src: "blade.jpg"
  },
  {
    id: 4,
    title: "Bloody Knife Guy",
    description: "..",
    image_src: "bloodyknifeguyredux_final.jpg"
  }
];

export default Artwork;