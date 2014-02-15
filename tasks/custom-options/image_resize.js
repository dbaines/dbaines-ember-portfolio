module.exports = {
  options: {
    width: 300,
    height: 300,
    overwrite: true
  },
  resize: {
    files: {
      'public/assets/projects/thumbnails/*': 'public/assets/projects/*'
    }
  }
};