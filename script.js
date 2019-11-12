$(document).ready(function() {
  main();
});

let artIndex, artActive, articleList, contentList;

function main() {
  //   randomizeColor();
  globalVariables();
  mouseEvents();
  keyEvent();
}

function globalVariables() {
  articleList = $("article").find(".thumbnail");
  contentList = $("article").find(".content");
  artActive = false;
}

function mouseEvents() {
  for (let i = 0; i < articleList.length; i++) {
    $(articleList[i]).click(function() {
      $(contentList[i]).toggle();
      $(articleList[i]).toggleClass("thumbnail-active");
      $("hori-hr").hide();
      artIndex = i;
      artActive = true;
      console.log("Article Index is: " + artIndex);
    });
  }
}

function keyEvent() {
  $(document).keypress(function(event) {
    if (event.keyCode === 13) {
      randomizeColor();
    }

    // if (event.keyCode === 13 && artActive) {
    //   console.log("toggle");
    //   $(contentList[artIndex]).toggle();
    //   $(articleList[artIndex]).toggleClass("thumbnail-active");
    //   artActive = false;
    // }
  });
}

function randomizeColor() {
  let primeArr = ["#e1ad01", "#ff5252", "#4E7DCC", "#4ECC9A"],
    secondArr = ["#333333", "#ffffcc", "#FF8C7A", "#FFDF94"],
    accentArr = ["#ffffff", "#333333", "#4D73B3", "#4DB38B"];
  colorIndex = Math.floor(Math.random() * primeArr.length);
  document.documentElement.style.setProperty(
      "--primary",
      primeArr[colorIndex]);
  document.documentElement.style.setProperty(
    "--secondary",
    secondArr[colorIndex]
  );
  document.documentElement.style.setProperty(
      "--accent",
      accentArr[colorIndex]);
}
