var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
  console.log("Current Degrees", currdeg);
  if(currdeg >= 0) {
    var remainder = currdeg%360;
    console.log("remainder", remainder);
    switch(remainder) {
      case 0: 
        console.log("Best Gig");
        bestGig();
        break;
      case 60: 
        console.log("Decision Tree");
        decisionTree();
        break;
      case 120: 
        console.log("Tetris");
        tetris();
        break;
      case 180: 
        console.log("Finfo");
        finfo();
        break;
      case 240: 
        console.log("PageRank");
        pagerank();
        break;
      case 300: 
        console.log("Othello");
        othello();
        break;
    }
  }
  else if(currdeg < 0) {
    var remainder = Math.abs(currdeg)%360;
    console.log("neg remainder",remainder);
    switch(remainder) {
      case 0: 
        console.log("Best Gig");
        bestGig();
        break;
      case 60: 
        console.log("Othello");
        othello();
        break;
      case 120: 
        console.log("PageRank");
        pagerank();
        break;
      case 180: 
        console.log("Finfo");
        finfo();
        break;
      case 240: 
        console.log("Tetris");
        tetris();
        break;
      case 300: 
        console.log("Decision Tree");
        decisionTree();
        break;
    }
  }

  function bestGig() {
    $("#projectText").text("Best Gig");
  }

  function decisionTree() {
    $("#projectText").text("Decision Tree");
  }

  function tetris() {
    $("#projectText").text("Tetris");
  }

  function finfo() {
    $("#projectText").text("Finfo");
  }

  function pagerank() {
    $("#projectText").text("PageRank");
  }

  function othello() {
    $("#projectText").text("Othello");
  }
}