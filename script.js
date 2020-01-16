$(document).ready(function() {
  main();
});

/**
 * Themes
 */
const themes = {
  primary: [
    "#e1ad01", // Orange
    "#ff5252", // soft red
    "#4E7DCC", // soft blue
    "#CC335B", // light crimson
    "#FFE9B9", // bright beige
    "#CC74A7", // soft cherry
    "#294699", // dark blue
    "#FFF0D9", // nier
    "#000000" // hacker
  ],
  secondary: [
    "#333333", // dark gray
    "#ffffcc", // bright yellow
    "#423F4C", // smudged charcoal
    "#49ACCC", // blueish teal
    "#5F7CB3", // soft blue
    "#99296A", // dark lilac
    "#748ACC", // soft blue
    "#837B6F", // nier
    "#00E626" // more hacker
  ],
  accent: [
    "#ffffff", // white
    "#333333", // dark gray
    "#FF8C7A", // salmon
    "#333333", // dark gray
    "#D1E1FF", // light blue
    "#bbbbbb", // light gray
    "#E9E0FF", // marble
    "#423E38", // nier
    "#008015" // morer hacker
  ]
};

/**
 * declare the existence of all variables
 */
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
  initiateGlobalVariables();
  setupMouseClickEvents();
  setupMouseHoverEvents();
  setupKeyEvent();
}

/**
 * Establish all global veriables
 */
function initiateGlobalVariables() {
  articleList = $("article").find(".thumbnail");
  contentList = $("article").find(".content");
  jobbList = $(document).find(".jobb");
  gridItems = $(".gallery-base").find(".gallery-item");
}

/**
 * all functions accessed through mouse click interaction
 */
function setupMouseClickEvents() {
  openArticle();
  openJobb();
  openGridItem();
  openGallery();
}

/**
 * all functions accessed through mouse hover interaction
 */
function setupMouseHoverEvents() {
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
function setupKeyEvent() {
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

/**
 * toggle the articles
 */
function openArticle() {
  for (let i = 0; i < articleList.length; i++) {
    $(articleList[i]).click(function() {
      $(articleList[i]).toggleClass("thumbnail-active");
      $(contentList[i]).fadeToggle(250);
      $(contentList[i]).css("min-height", $(document).height() + "px");
      $("hori-hr").hide();
    });
    $(articleList[i])
      .mouseover(function() {
        $(".thumbnail-logo").addClass("thumbnail-logo-styled");
      })
      .mouseout(function() {
        $(".thumbnail-logo").removeClass("thumbnail-logo-styled");
      });
  }
}

/**
 * slideToggle the jobbs i've had
 */
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

/**
 * toggle the images in the gallery to be shown in the showcase
 */
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

/**
 * toggle the gadllery window
 */
function openGallery() {
  $(".gallery-thumbnail").click(function() {
    $(".gallery-absolute").toggleClass("gallery-thumbnail-clicked");
    $(".gallery-thumbnail").toggleClass("gallery-thumbnail-styled");
    $(".gallery-logo").toggle();
    $(".gallery-base").fadeToggle(250);
  });
}
