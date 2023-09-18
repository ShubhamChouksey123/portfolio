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


addTextEnding()

function addTextEnding() {
  var s = document.getElementById("factNumberOfApi").innerHTML;
  console.log("s : " + s);

  const element = document.getElementById("factNumberOfApi");
  // element.data - purecounter - end;

}