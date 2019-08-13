var carousel = $(".carousel"),
  currdeg = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e) {
  if (e.data.d == "n") {
    currdeg = currdeg - 60;
  }
  if (e.data.d == "p") {
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY(" + currdeg + "deg)",
    "-moz-transform": "rotateY(" + currdeg + "deg)",
    "-o-transform": "rotateY(" + currdeg + "deg)",
    "transform": "rotateY(" + currdeg + "deg)"
  });
  console.log("Current Degrees", currdeg);
  if (currdeg >= 0) {
    var remainder = currdeg % 360;
    console.log("remainder", remainder);
    switch (remainder) {
      case 0:
        console.log("Best Gig");
        bestGig();
        break;
      case 60:
        console.log("Decision Tree");
        decisionTree();
        break;
      case 120:
        console.log("Fridge");
        fridge();
        break;
      case 180:
        // console.log("Finfo");
        pagerank();
        break;
      case 240:
        // console.log("PageRank");
        finfo();
        break;
      case 300:
        console.log("Othello");
        othello();
        break;
    }
  }
  else if (currdeg < 0) {
    var remainder = Math.abs(currdeg) % 360;
    console.log("neg remainder", remainder);
    switch (remainder) {
      case 0:
        console.log("BestGig");
        bestGig();
        break;
      case 60:
        console.log("Othello");
        othello();
        break;
      case 120:
        // console.log("PageRank");
        finfo();
        break;
      case 180:
        // console.log("Finfo");
        pagerank();
        break;
      case 240:
        console.log("Fridge");
        fridge();
        break;
      case 300:
        console.log("Decision Tree");
        decisionTree();
        break;
    }
  }

  function bestGig() {
    $("#projectText").text("BestGig");
    $("#codeShow").text("Git Repo: ");
    $("#codeLink").attr("href", "https://github.com/greysongy/BestGig");
    $("#codeLink").show();
    $("#codeDescription").text("Application for gig workers to compare rates and get machine learning forecasts");
  }

  function decisionTree() {
    $("#projectText").text("Decision Tree");
    $("#codeLink").hide();
    $("#codeShow").text("Code Upon Request");
    $("#codeDescription").text("Machine Learning implementation of ID3 Algorithm with > 95% accuracy on test data");
  }

  function fridge() {
    $("#projectText").text("Fridge");
    // $("#codeLink").hide();
    // $("#codeShow").text("Code Upon Request");
    $("#codeShow").text("Git Repo: ");
    $("#codeLink").attr("href", "https://github.com/greysongy/virtual-fridge");
    $("#codeLink").show();
    $("#codeDescription").text("Virtual Fridge to store ingredients and look up recipes");
  }

  function finfo() {
    $("#projectText").text("Finfo");
    $("#codeShow").text("Git Repo: ");
    $("#codeLink").attr("href", "https://github.com/greysongy/finfo");
    $("#codeLink").show();
    $("#codeDescription").text("Site for authenticated users to consolidate financial and travel information");
  }

  function pagerank() {
    $("#projectText").text("PageRank");
    $("#codeLink").hide();
    $("#codeShow").text("Code Upon Request");
    $("#codeDescription").text("Google's PageRank algorithm implemented on a directed graph built with adjacency matrix");
  }

  function othello() {
    $("#projectText").text("Othello");
    $("#codeLink").hide();
    $("#codeShow").text("Code Upon Request");
    $("#codeDescription").text("Othello with varying levels of AI computer players");
  }
}

var dropdown = false

$(".navbar-toggler").on("click", function () {
  console.log("The small navbar was clicked");
  if (!dropdown) {
    $(".next").css("visibility", "hidden");
    $(".prev").css("visibility", "hidden");
    dropdown = true;
  }
  else {
    $(".next").css("visibility", "visible");
    $(".prev").css("visibility", "visible");
    dropdown = false;
  }
})