// models/websites.js
var Websites = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string')
});

Websites.FIXTURES = [
  {
    id: "1",
    name: "Website One",
    description: "Description One"
  },{
    id: "2",
    name: "Website Two",
    description: "Description Two"
  },{
    id: "3",
    name: "Website Three",
    description: "Description Three"
  },{
    id: "4",
    name: "Website Four",
    description: "Description Four"
  },{
    id: "5",
    name: "Website Five",
    description: "Description Five"
  }
];

export default Websites;