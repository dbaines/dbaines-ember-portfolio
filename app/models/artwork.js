// models/websites.js
var Artwork = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string')
});

Artwork.FIXTURES = [
  {
    id: "1",
    name: "Artwirj One",
    description: "Description One"
  },{
    id: "2",
    name: "Artwirj Two",
    description: "Description Two"
  },{
    id: "3",
    name: "Artwirj Three",
    description: "Description Three"
  },{
    id: "4",
    name: "Artwirj Four",
    description: "Description Four"
  }
];

export default Artwork;