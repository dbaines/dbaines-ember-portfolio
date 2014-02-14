// models/websites.js
var Websites = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string')
});

Websites.FIXTURES = [
  {
    id: 1,
    name: "Website One",
    description: "Description One"
  },{
    id: 2,
    name: "Website Two",
    description: "Description Two"
  }
];

export default Websites;