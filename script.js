$(document).ready(function() {
  main();
});

function main() {
  mouseEvents();
}

function mouseEvents() {
  let
    articleList = $("article").find(".thumbnail"),
    contentList = $("article").find(".content");

  for (let i = 0; i < articleList.length; i++) {
    $(articleList[i]).click(function() {
      $(contentList[i]).toggle();
    });
  }
}
