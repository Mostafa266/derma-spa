
const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://dermaa-spa.netlify.app",
  }
}
