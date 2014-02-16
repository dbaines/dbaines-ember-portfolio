// models/projects.js
var Projects = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  tags: DS.attr('string'),
  thumbnail_src: DS.attr('string'),
  image_src: DS.attr('string'),
  images: DS.attr('array'),
  agency: DS.attr('string'),
  video: DS.attr('string'),

  imagePath: function(){
    var image_src = this.get("image_src");
    if(image_src == null) {
      return this.get("images")[0];
    } else {
      return "/assets/projects/" + image_src;
    }
  }.property('image_src', 'images'),

  thumbnailPath: function(){
    var thumb_src = this.get("thumbnail_src");
    var imagePath = this.get("imagePath");
    if(thumb_src == null) {
      return imagePath;
    } else {
      return "/assets/projects/thumbnails/" + thumb_src;
    }
  }.property("thumbnail_src", "imagePath"),

  videoWebM: function(){
    return "/assets/video/" + this.get("video") + ".webm";
  }.property("video"),
  videoOggV: function(){
    return "/assets/video/" + this.get("video") + ".ogv";
  }.property("video"),
  videoMP4: function(){
    return "/assets/video/" + this.get("video") + ".mp4";
  }.property("video")
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
    agency: "Steel Blue Zebra",
    tags: "ios app",
    description: "..",
    image_src: "pastamama.jpg",
    thumbnail_src: "pastamama.jpg",
    images: [
      "/assets/projects/pastamama/intro.png",
      "/assets/projects/pastamama/game.png",
      "/assets/projects/pastamama/game-paused.png",
      "/assets/projects/pastamama/game-store.png",
      "/assets/projects/pastamama/game-game-over.png",
      "/assets/projects/pastamama/art-mama.png",
      "/assets/projects/pastamama/art-armando-01.png",
      "/assets/projects/pastamama/art-armando-02.png",
      "/assets/projects/pastamama/art-armando-03.jpg",
      "/assets/projects/pastamama/art-blaster.png",
      "/assets/projects/pastamama/art-master.png",
      "/assets/projects/pastamama/art-disaster-01.jpg",
      "/assets/projects/pastamama/art-disaster-02.png"
    ]
  },
  {
    id: "nickl-tin",
    title: "Nickl-Tin",
    agency: "Steel Blue Zebra",
    tags: "ios app",
    description: null,
    image_src: "nickl-tin.jpg",
    thumbnail_src: "nickl-tin.jpg",
    images: [
      "/assets/projects/nickl-tin/menu-paused.jpg",
      "/assets/projects/nickl-tin/menu-game-over.jpg",
      "/assets/projects/nickl-tin/menu-my-stuff.jpg",
      "/assets/projects/nickl-tin/menu-skins.jpg",
      "/assets/projects/nickl-tin/tin-basic.jpg",
      "/assets/projects/nickl-tin/tin-melvtin.jpg",
      "/assets/projects/nickl-tin/tin-paintin.jpg",
      "/assets/projects/nickl-tin/tin-plisktin.jpg",
      "/assets/projects/nickl-tin/tin-pumpktin.jpg",
      "/assets/projects/nickl-tin/tin-stealth.jpg"
    ]
  },
  {
    id: "garys-best-price",
    title: "Gary's Best Price",
    tags: "website",
    description: null,
    image_src: "garysbestprice_01.png",
    thumbnail_src: "garysbestprice_01.png",
    images: null
  },
  {
    id: "christines-massage",
    title: "Christine's Massage",
    tags: "website",
    description: null,
    image_src: "christinesmassage_01.png",
    thumbnail_src: "christinesmassage_01.png",
    images: null
  },
  {
    id: "steel-blue-zebra",
    title: "Steel Blue Zebra",
    agency: "Steel Blue Zebra",
    tags: "website",
    description: null,
    image_src: "steelbluezebra_01.jpg",
    thumbnail_src: "steelbluezebra_01.jpg",
    images: [
      "/assets/projects/steelbluezebra_02.jpg",
      "/assets/projects/steelbluezebra_03.jpg"
    ]
  },
  {
    id: "co-opp",
    title: "Co-Opp",
    tags: "wordpress events engine",
    description: null,
    image_src: "co-opp-stack.jpg",
    thumbnail_src: "co-opp-stack.jpg",
    images: [
      "/assets/projects/co-opp_profile.jpg",
      "/assets/projects/co-opp_profile-stacks.jpg",
      "/assets/projects/co-opp_mini-stack.jpg"
    ]
  },
  {
    id: "what-style-am-i",
    title: "What Style Am I?",
    tags: "website",
    agency: "CDAA Pty Ltd",
    description:
      "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, accusamus, tempora, ex maiores nisi rem itaque dolor alias sed illo nulla eius quos officia non ipsum labore voluptatibus at sint.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, accusamus, tempora, ex maiores nisi rem itaque dolor alias sed illo nulla eius quos officia non ipsum labore voluptatibus at sint.</p>"
    ,
    image_src: "what_style_01.jpg",
    thumbnail_src: "what_style_01.jpg",
    images: [
      "/assets/projects/what_style_02.jpg",
      "/assets/projects/what_style_03.jpg",
      "/assets/projects/what_style_04.jpg",
      "/assets/projects/what_style_05.jpg"
    ]
  },
  {
    id: "demon-soul",
    title: "Demon Soul",
    tags: "motion",
    description: null,
    image_src: "demon-soul.jpg",
    thumbnail_src: "demon-soul.jpg",
    images: null,
    video: "demon-soul"
  },
  {
    id: "city-race",
    title: "City Race",
    tags: "motion",
    description: null,
    image_src: "city-race.jpg",
    thumbnail_src: "city-race.jpg",
    images: null,
    video: "city-race"
  },
  {
    id: "bella-textiles",
    title: "Bella Textiles",
    agency: "Bakas IT",
    tags: "website",
    description: null,
    image_src: "bellatextiles_001.jpg",
    thumbnail_src: "bellatextiles_001.jpg",
    images: [
      "/assets/projects/bellatextiles_002.jpg",
      "/assets/projects/bellatextiles_003.jpg"
    ]
  },
  {
    id: "labruzzese",
    title: "L'Abruzzese",
    agency: "Bakas IT",
    tags: "website",
    description: null,
    image_src: "labruz_01.jpg",
    thumbnail_src: "labruz_01.jpg",
    images: null
  }
];

export default Projects;