Nightmare.action('Screenshot', {
  take(name, width, height, done) {
    this
      .viewport(width, height)
      .wait(1000)
      .screenshot(`./temp/${name}.png`)
      .then(done);
  }
})
