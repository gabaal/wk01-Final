console.log("app.js linked and working");

//title and nav hide on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
};

//featured section read more show / hide
let featureText = document.getElementById("featureReadMoreText");
featureText.style.display = `none`;
let featureIsShow = false;

const readMore = document.getElementById("featureReadMore");
readMore.addEventListener("click", featureToggleText);

function featureToggleText() {
  if (featureIsShow) {
    featureText.style.display = `none`;
    featureIsShow = false;
  } else {
    featureText.style.display = `block`;
    featureIsShow = true;
  }
}

//tours section read more show / hide
let toursText = document.getElementById("toursreadMoreText");
toursText.style.display = `none`;
let toursIsShow = false;

const toursReadMore = document.getElementById("toursReadMore");
toursReadMore.addEventListener("click", toursToggleText);

function toursToggleText() {
  if (toursIsShow) {
    toursText.style.display = `none`;
    toursIsShow = false;
  } else {
    toursText.style.display = `block`;
    toursIsShow = true;
  }
}
