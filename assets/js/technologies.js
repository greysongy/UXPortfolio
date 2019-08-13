
function transform() {
    // $("#Tiles").css("-webkit-transition", "all 2s");
    // $("#Tiles").css("transform", "rotateX(75deg) rotateY(0deg) rotateZ(45deg)");
    $("#Tiles").css("transform", "none");
    // setTimeout(2500, function() {
    //     $("#Tiles").css("-webkit-transition", "all 0.3s");
    // })
}

transform();

const finfo = {
    name: "Finfo",
    image: "finfo2.png"
}

const tech = [
    {
        name: "Javascript",
        image: "javascript.jpg",
        details: ["Comfortable with ES5 and ES6", "Experience client and server side", "Often used in conjuction with libraries like JQuery and React"],
        projects: [finfo],
        descriptions: ["Used in conjunction with JQuery to modify DOM elements/retrieve API calls"]
    }
]

$(".navbar-toggler").on("click", function () {
    console.log("The small navbar was clicked");
    // $("#Container").css("visibility", "hidden");
    // $("#innerNav").css("visibility", "visible");
})

$(".title").on("click", function () {
    // console.log("A tech button was clicked");
    displayTech(this.dataset.index)
    $("#myModal").modal('toggle');
    // console.log("Data attribute" + this.dataset.index);
})

function displayTech(index) {
    var element = tech[index];
    $("#ttitle").text(element.name);
    $("#tlogo").attr('src', "assets/images/" + element.image);
    console.log("projects", element.projects);
    for (var i = 0; i < element.projects.length; i++) {
        console.log("This ran for", i);
        var newCard = $(`<div class='card'>
            <img class= 'card-img-top' src = ${'assets/images/' + element.projects[i].image} alt = 'Card image cap' >
            <div class='card-body'>
                <h3 class='card-title styledText'>${element.projects[i].name}</h3>
                <p class='card-text styledText'>${element.descriptions[i]}</p>
                <a href='#' class='btn btn-primary'>Go somewhere</a>
            </div>
    </div > `);
        $("#section" + i).append(newCard);
        // $("section1").append("<p>Test text</p>");
    }
}


