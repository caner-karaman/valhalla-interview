function ImageGridViewRenderer() {}

ImageGridViewRenderer.prototype.render = function () {
  var page = 1
  if (window.location.search.includes('page')) {
    page = Number(window.location.search.split('page=')[1])
  }
  if (window.location.search.includes('?nature')) {
    document.getElementById("main-view").innerHTML +=
     '<div class="container">'
    +'  <div id="nature-images" class="row row-cols-3"></div>'
    +'</div>'
    ImageDataGetter.getNatureImagesFromPage((page * 3) - 2)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("nature-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
    ImageDataGetter.getNatureImagesFromPage((page * 3) - 1)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("nature-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
    ImageDataGetter.getNatureImagesFromPage(page * 3)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("nature-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
  } else if (window.location.search.includes('?architecture')) {
    document.getElementById("main-view").innerHTML +=
     '<div class="container">'
    +'  <div id="architecture-images" class="row row-cols-3"></div>'
    +'</div>'
    ImageDataGetter.getArchitectureImagesFromPage((page * 3) - 2)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("architecture-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
    ImageDataGetter.getArchitectureImagesFromPage((page * 3) - 1)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("architecture-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
    ImageDataGetter.getArchitectureImagesFromPage(page * 3)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("architecture-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
  } else if (window.location.search.includes('?fashion')) {
    document.getElementById("main-view").innerHTML +=
     '<div class="container">'
    +'  <div id="fashion-images" class="row row-cols-3"></div>'
    +'</div>'
    ImageDataGetter.getFashionImagesFromPage((page * 3) - 2)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("fashion-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
    ImageDataGetter.getFashionImagesFromPage((page * 3) - 1)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("fashion-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
    ImageDataGetter.getFashionImagesFromPage(page * 3)
      .then(function (images) {
        for (var i = 0; i < images.length; i++) {
          document.getElementById("fashion-images").innerHTML +=
          '<div class="col" style="height: 400px; padding: 10px;">'
          +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" />'
          +'  <div class="middle">'
          +'    <a class="btn btn-dark" href="' + images[i].url + '" download="' + images[i].name + '">DOWNLOAD</a>'
          +'  </div>'
          +'</div>'
        }
      })
  }

}

export default ImageGridViewRenderer;
