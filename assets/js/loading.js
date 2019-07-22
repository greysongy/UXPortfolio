
var count = 0;

function showStuff() {
    $('#loadContent').css("display", "none");
    $('#mainContent').css("display", "unset");
    count++;
    console.log("count");
}

if (count === 0) {
    setTimeout(showStuff, 3000);
}