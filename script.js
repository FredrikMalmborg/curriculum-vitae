$(document).ready(function() {
  main();
});

let artIndex,
  articleList,
  contentList,
  jobbList,
  jobbDescriptionList,
  gridItems,
  progList;

function main() {
  //   randomizeColor();
  globalVariables();
  mouseEvents();
  keyEvent();

  progListStatusBars();
}

function globalVariables() {
  articleList = $("article").find(".thumbnail");
  contentList = $("article").find(".content");
  jobbList = $(document).find(".jobb");
  gridItems = $(".gallery-base").find(".gallery-item");
  progList = $(".bar-holder").find(".bar"),
  progPercent = $('.bar').find('p');
}

function mouseEvents() {
  for (let i = 0; i < articleList.length; i++) {
    $(articleList[i]).click(function() {
      $(contentList[i]).fadeToggle(250);
      $(contentList[i]).css("min-height", $(document).height() + "px");
      $(articleList[i]).toggleClass("thumbnail-active");
      // $('.thumbnail img').fadeToggle(250)

      $("hori-hr").hide();

      console.log("Article Index is: " + i);

      if (i === 0) {
        console.log("experience");
      }
      if (i === 1) {
        $(articleList[i]).toggleClass("thumbnail-me");
        console.log("me");
      }
      if (i === 2) {
        console.log("contact");
      }
    });
  }

  for (let j = 0; j < jobbList.length; j++) {
    $(jobbList[j])
      .find("h4")
      .click(function() {
        $(jobbList[j])
          .find(".jobb-content")
          .slideToggle(250);
        console.log("jobb " + j);
      });
  }

  for (let x = 0; x < gridItems.length; x++) {
    $(gridItems[x]).click(function() {
      console.log("grid item " + x);
    });
  }

  $(".gallery-absolute")
    .mouseover(function() {
      $(".gallery-logo").addClass("logo-opacity");
      $(".gallery-logo").css("top", "70%");
    })
    .mouseout(function() {
      $(".gallery-logo").removeClass("logo-opacity");
      $(".gallery-logo").css("top", "75%");
    });

  $(".gallery-thumbnail").click(function() {
    $(".gallery-absolute").toggleClass("gallery-thumbnail-clicked");
    $(".gallery-logo").toggle();
    $(".gallery-base").fadeToggle(250);
  });

  $(".education h2").click(function() {
    $(".education > *:not(h2)").slideToggle();
  });
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
    accentArr = ["#ffffff", "#333333", "#423F4C", "#4DB38B"];
  colorIndex = Math.floor(Math.random() * primeArr.length);
  document.documentElement.style.setProperty("--primary", primeArr[colorIndex]);
  document.documentElement.style.setProperty(
    "--secondary",
    secondArr[colorIndex]
  );
  document.documentElement.style.setProperty("--accent", accentArr[colorIndex]);
}

function progListStatusBars() {
  for (let i = 0; i < progList.length; i++) {

      // progList[i].css('width', `$(current)`)

    console.log("on");
    console.log(current.val);
  }
}
