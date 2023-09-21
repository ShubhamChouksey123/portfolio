/**
 * Javascript to control the HTML rendering content and dynamically server contents
* @author: Shubham Chouksey
*/



function addTextEnding() {
  var s = document.getElementById("factNumberOfApi").innerHTML;
  const element = document.getElementById("factNumberOfApi");
}

/**
 * search the highest image quality 
 */
function getHighestResImg(element) {
  var s = element.getAttribute("data-srcset").split(",").at(0);
  var first = s.trim().split(" ").at(0);
  return first;
}

/**
 * Lazy loading of images code : 
 *    taken from here : https://web.dev/lazy-loading-images/
 */
document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy-load-image"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;

          // console.log("entry.target : " + entry.target);
          // lazyImage.src = lazyImage.dataset.src;

          lazyImage.src = getHighestResImg(lazyImage);
          console.log("src : " + lazyImage.src);

          // lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy-load-image");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to event handlers here
  }
});
