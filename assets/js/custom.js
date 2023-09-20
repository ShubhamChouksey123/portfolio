/**
 * Javascript to control the HTML rendering content and dynamically server contents
* @author: Shubham Chouksey
*/


// addURL();

function addURL() {
  const config = require('../configs/config.yml');
  console.log("reached here");
  const domain = config.get('server.domain');
  document.getElementById("websiteURLId").innerHTML = domain;

}



function addTextEnding() {
  var s = document.getElementById("factNumberOfApi").innerHTML;
  const element = document.getElementById("factNumberOfApi");
}


document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages = document.querySelectorAll("img.lazy-load-image");
  var lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});