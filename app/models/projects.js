// models/projects.js
var Projects = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  tags: DS.attr('string'),
  image_src: DS.attr('string'),
  images: DS.attr('array'),

  imagePath: function(){
    var image_src = this.get("image_src");
    if(image_src == null) {
      return this.get("images")[0];
    } else {
      return "/assets/projects/" + image_src;
    }
  }.property('image_src', 'images')
});

Projects.FIXTURES = [
  {
    id: "artwork",
    title: "Artwork",
    description: null,
    image_src: null,
    images: [
      "/assets/projects/artwork/404monkey.jpg",
      "/assets/projects/artwork/afromunkee.jpg",
      "/assets/projects/artwork/blade.jpg",
      "/assets/projects/artwork/bloodyknifeguyredux_final.jpg",
      "/assets/projects/artwork/gunmouthguy.jpg",
      "/assets/projects/artwork/hairyguy.jpg",
      "/assets/projects/artwork/jedirabbit.jpg",
      "/assets/projects/artwork/knightguy.jpg",
      "/assets/projects/artwork/leap.jpg",
      "/assets/projects/artwork/lildemon.jpg",
      "/assets/projects/artwork/ninja.jpg",
      "/assets/projects/artwork/nuclear.jpg",
      "/assets/projects/artwork/orc.jpg",
      "/assets/projects/artwork/pirate.jpg",
      "/assets/projects/artwork/shade-cartoony.jpg",
      "/assets/projects/artwork/sithmonkey.jpg",
      "/assets/projects/artwork/unomomento.jpg",
      "/assets/projects/artwork/warturtle.jpg",
      "/assets/projects/artwork/x5hoodie.jpg",
      "/assets/projects/artwork/x5stabsguy.jpg"
    ]
  },
  {
    id: "pasta-mama",
    title: "Pasta Mama",
    tags: "ios app",
    description: "..",
    image_src: "pastamama.jpg",
    images: [
      // "/assets/projects/bellatextiles_002.jpg"
    ]
  },
  {
    id: "nikl-tin",
    title: "Nikl-Tin",
    tags: "ios app",
    description: null,
    image_src: "nikltin.jpg",
    images: null
  },
  {
    id: "garys-best-price",
    title: "Gary's Best Price",
    tags: "website",
    description: null,
    image_src: "garysbestprice.jpg",
    images: null
  },
  {
    id: "christines-massage",
    title: "Christine's Massage",
    tags: "website",
    description: null,
    image_src: "christinesmassage.jpg",
    images: null
  },
  {
    id: "steel-blue-zebra",
    title: "Steel Blue Zebra",
    tags: "website",
    description: null,
    image_src: "steel-blue-zebra.jpg",
    images: null
  },
  {
    id: "demon-soul",
    title: "Demon Soul",
    tags: "motion",
    description: null,
    image_src: "demon-soul.jpg",
    images: null
  },
  {
    id: "city-race",
    title: "City Race",
    tags: "motion",
    description: null,
    image_src: "city-race.jpg",
    images: null
  },
  {
    id: "bella-textiles",
    title: "Bella Textiles",
    tags: "website",
    description: null,
    image_src: "bellatextiles_001.jpg",
    images: [
      "/assets/projects/bellatextiles_002.jpg",
      "/assets/projects/bellatextiles_003.jpg"
    ]
  },
  {
    id: "labruzzese",
    title: "L'Abruzzese",
    tags: "website",
    description: null,
    image_src: "labruz_01.jpg",
    images: null
  }
];

export default Projects;