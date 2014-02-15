// models/projects.js
var Projects = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('category'),
  image_src: DS.attr('string'),
  images: DS.attr('array'),

  imagePath: function(){
    return "/assets/" + this.get("category")  + "/" + this.get("image_src");
  }.property('image_src', 'category'),
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
    description: null,
    category: "artwork",
    image_src: "404monkey.jpg",
    images: null
  },
  {
    id: "afromonkey",
    title: "Afromonkey",
    description: null,
    category: "artwork",
    image_src: "afromunkee.jpg",
    images: null
  },
  {
    id: "blade",
    title: "Blade",
    description: null,
    category: "artwork",
    image_src: "blade.jpg",
    images: null
  },
  {
    id: "knife-guy",
    title: "Bloody Knife Guy",
    description: null,
    category: "artwork",
    image_src: "bloodyknifeguyredux_final.jpg",
    images: null
  },
  {
    id: "gun-mouth",
    title: "Gun Mouth Guy",
    description: null,
    category: "artwork",
    image_src: "bloodyknifeguyredux_final.jpg",
    images: null
  },
  {
    id: "hairy-guy",
    title: "Hairy",
    description: null,
    category: "artwork",
    image_src: "hairyguy.jpg",
    images: null
  },
  {
    id: "jedi-rabbit",
    title: "Jedi Rabbit",
    description: null,
    category: "artwork",
    image_src: "jedirabbit.jpg",
    images: null
  },
  {
    id: "leap",
    title: "Leap",
    description: null,
    category: "artwork",
    image_src: "leap.jpg",
    images: null
  },
  {
    id: "lil-demon",
    title: "Lil' Demon",
    description: null,
    category: "artwork",
    image_src: "lildemon.jpg",
    images: null
  },
  {
    id: "ninja",
    title: "Ninja",
    description: null,
    category: "artwork",
    image_src: "ninja.jpg",
    images: null
  },
  {
    id: "nuclear",
    title: "Nuclear",
    description: null,
    category: "artwork",
    image_src: "nuclear.jpg",
    images: null
  },
  {
    id: "orc",
    title: "Orc",
    description: null,
    category: "artwork",
    image_src: "orc.jpg",
    images: null
  },
  {
    id: "pirate",
    title: "Pirate",
    description: null,
    category: "artwork",
    image_src: "pirate.jpg",
    images: null
  },
  {
    id: "bella-textiles",
    title: "Bella Textiles",
    description: "..",
    category: "website",
    image_src: "bellatextiles_001.jpg",
    images: [
      "/assets/website/bellatextiles_002.jpg",
      "/assets/website/bellatextiles_003.jpg"
    ]
  }
];

export default Projects;