$(document).ready(function() {
  main();
});

let artIndex,
  articleList,
  contentList,
  jobbList,
  jobbDescriptionList;

function main() {
  //   randomizeColor();
  globalVariables();
  mouseEvents();
  keyEvent();
}
$("content").css("height", "200vh");

function globalVariables() {
  articleList = $("article").find(".thumbnail");
  contentList = $("article").find(".content");
  jobbList = $(".jobb").find("h4");
  jobbDescriptionList = $(".jobb").find("p");

    console.log(jobbList)
    console.log(jobbDescriptionList)
    console.log(articleList)

}

function mouseEvents() {
  for (let i = 0; i < articleList.length; i++) {
    $(articleList[i]).click(function() {
      $(contentList[i]).fadeToggle(250);
      $(contentList[i]).css("min-height", $("body").height() + "px");
      $(articleList[i]).toggleClass("thumbnail-active");
      $("hori-hr").hide();
      artIndex = i;
      console.log("Article Index is: " + artIndex);
    });
  }

  for (let j = 0; j < jobbList.length; j++) {
      $(jobbList[j]).click(function() {
        $(jobbDescriptionList[j]).toggle(0);
        $(jobbList[j]).toggleClass("jobbOpen");
        
        console.log("bread " + j);
    });
  }
}

function keyEvent() {
  $(document).keypress(function(event) {
    if (event.keyCode === 13) {
      randomizeColor();
    }
  });
}

function randomizeColor() {
  let primeArr = ["#e1ad01", "#ff5252", "#4E7DCC", "#4ECC9A"],
    secondArr = ["#333333", "#ffffcc", "#FF8C7A", "#FFDF94"],
    accentArr = ["#ffffff", "#333333", "#4D73B3", "#4DB38B"];
  colorIndex = Math.floor(Math.random() * primeArr.length);
  document.documentElement.style.setProperty("--primary", primeArr[colorIndex]);
  document.documentElement.style.setProperty( "--secondary",secondArr[colorIndex]);
  document.documentElement.style.setProperty("--accent", accentArr[colorIndex]);
}
