$(document).ready(function() {
  main();
});

/**
 * Themes
 */
const themes = {
  primary:    ["#e1ad01", "#ff5252", "#4E7DCC", "#ABFFE6", "#FFE9B9", "#CC74A7"],
  secondary:  ["#333333", "#ffffcc", "#423F4C","#54B396", "#5F7CB3", "#99296A"],
  accent:     ["#ffffff", "#333333", "#FF8C7A", "#333", "#D1E1FF", "#bbb"]
};            //Orange    soft-red
              //D-gray    Br-yellow
              //White     D-grey

let artIndex,
  articleList,
  contentList,
  jobbList,
  jobbDescriptionList,
  gridItems,
  progList;

/**
 * Execute all functions
 */

function main() {
  randomizeColor();
  globalVariables();
  mouseClickEvents();
  mouseHoverEvents();
  keyEvent();
}

/**
 * Establish all global veriables
 */
function globalVariables() {
  articleList = $("article").find(".thumbnail");
  contentList = $("article").find(".content");
  jobbList = $(document).find(".jobb");
  gridItems = $(".gallery-base").find(".gallery-item");
  (progList = $(".bar-holder").find(".bar")),
    (progPercent = $(".bar").find("p"));
}

/**
 * all functions accessed through mouse interaction
 */
function mouseClickEvents() {
  openArticle();

  openJobb();

  openGridItem();


  $(".gallery-thumbnail").click(function() {
    $(".gallery-absolute").toggleClass("gallery-thumbnail-clicked");
    $(".gallery-thumbnail").toggleClass("gallery-thumbnail-styled");
    $(".gallery-logo").toggle();
    $(".gallery-base").fadeToggle(250);
  });
}
function mouseHoverEvents() {
  $(".gallery-absolute")
  .mouseover(function() {
    $(".gallery-logo").addClass("logo-opacity");
    $(".gallery-logo").css("top", "60%");
  })
  .mouseout(function() {
    $(".gallery-logo").removeClass("logo-opacity");
    $(".gallery-logo").css("top", "75%");
  });
}

/**
 * all functions accessed through keyboard interaction
 */
function keyEvent() {
  $(document).keypress(function(event) {
    if (event.keyCode === 13) {
      randomizeColor();
    }
  });
}
/**
 * randomize the theme of the website
 */
function randomizeColor() {
  colorIndex = Math.floor(Math.random() * themes.primary.length);

  document.documentElement.style.setProperty(
    "--primary",
    themes.primary[colorIndex]
  );
  document.documentElement.style.setProperty(
    "--secondary",
    themes.secondary[colorIndex]
  );
  document.documentElement.style.setProperty(
    "--accent",
    themes.accent[colorIndex]
  );
}

function openArticle() {
  for (let i = 0; i < articleList.length; i++) {
    $(articleList[i]).click(function() {
      $(articleList[i]).toggleClass("thumbnail-active");
      $(contentList[i]).fadeToggle(250);
      $(contentList[i]).css("min-height", $(document).height() + "px");

      $("hori-hr").hide();

      console.log("Article Index is: " + i);
    });
    $(articleList[i])
      .mouseover(function() {
        console.log("in " + i);

        // $(articleList[i]).find('.thumbnail-logo').addClass('thumbnail-logo-styled')
        $(".thumbnail-logo").addClass("thumbnail-logo-styled");
      })
      .mouseout(function() {
        console.log("out " + i);
        // $(articleList[i]).find('.thumbnail-logo').removeClass('thumbnail-logo-styled')
        $(".thumbnail-logo").removeClass("thumbnail-logo-styled");
      });
  }
}

function openJobb() {
  for (let j = 0; j < jobbList.length; j++) {
    $(jobbList[j])
      .find("h4")
      .click(function() {
        $(jobbList[j])
          .find(".jobb-content")
          .slideToggle(250);
      });
  }
}

function openGridItem() {
  for (let x = 0; x < gridItems.length; x++) {
    $(gridItems[x]).click(function() {
      targetBackground = $(gridItems[x]).css("background-image");
      $(".showcase").css("background-image", `${targetBackground}`);
      $(".grid-module").fadeToggle(100);
    });
  }
  $(".grid-module").click(function() {
    $(".grid-module").fadeToggle(100);
  });
}