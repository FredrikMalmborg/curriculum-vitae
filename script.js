$(document).ready(function() {
  main();
});

let artIndex, artActive, articleList, contentList;


function main() {
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
      $("hori-hr").hide()
      artIndex = i;
      artActive = true;
      console.log("Article Index is: " + artIndex);
    });
  }
}

function keyEvent() {
  $(document).keypress(function(event) {
    if (event.keyCode === 13 && artActive) {
      console.log("toggle");
      $(contentList[artIndex]).toggle();
      $(articleList[artIndex]).toggleClass("thumbnail-active");
      artActive = false;
    }
  });
}
