
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
        details: ["Used in tandem with Ajax and Axios for application routing and API integration", "Built distinct front-end UIs with React components and JQuery DOM manipulation", "Coded server-side algorithmic logic for multiple applications"],
        projects: [finfo],
        descriptions: ["Used in conjunction with JQuery to modify DOM elements/retrieve API calls"]
    }, 
    {
        name: "Python",
        image: "python.png",
        details: ["Implemented numerous variations of classic algorithms with strong runtime considerations", "Worked with data structures (examples include stacks, priority queues, dictionaries, BSTs, DAGs, MSTs, etc.)", "Some experience building small-scale applications with Django and Flask"],
        projects: [],
        descriptions: []
    }, 
    {
        name: "Java",
        image: "java.jpg",
        details: ["Designed elaborate applications using object-oriented paradigm", "Implemented complex algorithms (machine learning variants, PageRank, etc.) with rigorous unit testing", "Used JavaFX to design GUIs for multiple interactive applications"],
        projects: [],
        descriptions: []
    }, 
    {
        name: "Node.js",
        image: "nodejs.jpg",
        details: ["Built multiple coupled applications with node facilitating back-end servers", "Used in tandem with multiple npm packages to provide interactive functionality for users", "Unified distinct features of MVC applications under a single programming language paradigm"],
        projects: [],
        descriptions: []
    }, 
    {
        name: "HTML",
        image: "htmlPic.png",
        details: ["Styled front-end designs with intrinsic HTML elements", "Used in tandem with DOM manipulation libraries like JQuery", "Applied principles to frameworks with similar syntax, like React's JSX"],
        projects: [],
        descriptions: []
    }, 
    {
        name: "React",
        image: "react2.jpg",
        details: ["Built fully React interfaces with complex hierarchies of nested components/state", "Integrated existing React libraries (like Material UI) into full-stack applications", "Working on transitioning web applications to mobile versions with React Native"],
        projects: [],
        descriptions: [] 
    }, 
    {
        name: "JQuery", 
        image: "jquery2.png", 
        details: ["Used to provide DOM manipulation for purely front-end applications", "Combined with back-end server side code to dynamically manipulate client-side views", "Integrated with three dimensional CSS to produce comprehensive aesthetic designs"], 
        projects: [], 
        descriptions: []
    }, 
    {
        name: "CSS", 
        image: "css.png", 
        details: ["Integrated vast array of specific properties to improve visual appeal of various applications", "Used similar syntax to style React components", "Combined with media queries to ensure mobile responsiveness for multiple web applications"], 
        projects: [], 
        descriptions: []
    }, 
    {
        name: "TensorFlow", 
        image: "tensorflow.png", 
        details: ["Coded polynomial regression model with multiple layers to estimate Uber fares from ride distance", "Working on building larger layered network to provide more accurate earnings estimates to gig workers", "Taking Deep Learning course that emphasizes building multi-layered neural networks"], 
        projects: [], 
        descriptions: []
    }, 
    {
        name: "Bootstrap", 
        image: "boostrap3.png", 
        details: ["Combined inherent components with multiple full-stack applications to build smooth UI", "Implemented various versions of inherent grid system to make web applications mobile responsive", "Integrated inherent Bootstrap styling with CSS properties (with mx as an example of the contrasts in syntax)"], 
        projects: [], 
        descriptions: []
    }, 
    {
        name: "Express", 
        image: "express2.jpg", 
        details: ["Created back-end servers using express functionality", "Used middleware to facilitate application routing", "Implemented alongside callbacks to ensure proper timing of requests and responses"], 
        projects: [], 
        descriptions: []
    }, 
    {
        name: "Firebase", 
        image: "firebase.jpg", 
        details: ["Implemented user authentication feature on small scale application", "Stored data associated with users that could be continuously accessed and updated", "Currently learning cloud storage and realtime database features"], 
        projects: [], 
        descriptions: []
    }
]

$(".navbar-toggler").on("click", function () {
    console.log("The small navbar was clicked");
    // $("#Container").css("visibility", "hidden");
    // $("#innerNav").css("visibility", "visible");
})

$(".title").on("click", function () {
    // console.log("A tech button was clicked");
    emptyCards();
    displayTech(this.dataset.index)
    $("#myModal").modal('toggle');
    // console.log("Data attribute" + this.dataset.index);
})

function displayTech(index) {
    var element = tech[index];
    $("#ttitle").text(element.name);
    $("#tlogo").attr('src', "assets/images/" + element.image);
    console.log("projects", element.projects);
    for(var j = 0; j < element.details.length; j++) {
        $("#skillsList").append(`<li>${element.details[j]}</li>`)
    }
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

function emptyCards() {
    $("#skillsList").empty();
    for(var i = 0; i < 6; i++) {
        $("#section" + i).empty();
    }
}


