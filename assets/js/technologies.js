
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
    image: "finfo2.png",
    repoLink: "https://github.com/greysongy/finfo",
    academic: false
}

const fridge = {
    name: "Fridge",
    image: "RecipePage.PNG",
    repoLink: "https://github.com/greysongy/virtual-fridge",
    academic: false
}

const bestGig = {
    name: "BestGig",
    image: "bgF.png",
    repoLink: "https://github.com/greysongy/BestGig",
    academic: false
}

const othello = {
    name: "Othello",
    image: "othelloPic.png",
    repoLink: "",
    academic: true
}

const decisionTree = {
    name: "Decision Tree", 
    image: "decisiontree.png", 
    repoLink: "", 
    academic: true
}

const pagerank = {
    name: "PageRank", 
    image: "pagerank.png", 
    repoLink: "", 
    academic: true
}

const heap = {
    name: "Heap", 
    image: "heapPic1.png", 
    repoLink: "", 
    academic: true
}

const tetris = {
    name: "Tetris", 
    image: "tetris2.png", 
    repoLink: "", 
    academic: true
}

const graphAlgorithms = {
    name: "Graph/Tree Algorithms", 
    image: "graphPic.png", 
    repoLink: "", 
    academic: true
}

const sortingAlgorithms = {
    name: "Sorting Algorithms", 
    image: "mergeSort.png", 
    repoLink: "", 
    academic: true
}

const stackqueue = {
    name: "Stacks/Queues", 
    image: "stackqueue.png", 
    repoLink: "", 
    academic: true
}

const hashing = {
    name: "Hashing/Dictionaries", 
    image: "hashing.png", 
    repoLink: "", 
    academic: true
}

const recursion = {
    name: "Recursive Problems", 
    image: "recursion.png", 
    repoLink: "", 
    academic: true
}

const bsts = {
    name: "Binary Search/BSTs", 
    image: "bst.jpg", 
    repoLink: "", 
    academic: true
}

const jobFinder = {
    name: "Job Finder App", 
    image: "jobFinderHome.png", 
    repoLink: "https://github.com/greysongy/jobFinderApp", 
    academic: false
}

const clMarketplace = {
    name: "Command-Line Marketplace", 
    image: "clMarketplaceHome.png", 
    repoLink: "https://github.com/greysongy/command-line-marketplace", 
    academic: false
}

const tech = [
    {
        name: "Javascript",
        image: "javascript.jpg",
        details: ["Used in tandem with Ajax and Axios for application routing and API integration", "Built distinct front-end UIs with React components and JQuery DOM manipulation", "Coded server-side algorithmic logic for multiple applications"],
        projects: [fridge, bestGig, finfo, jobFinder, clMarketplace],
        descriptions: ["Function component logic, API integration, middleware routing", "Logic to dynamically display/sort results, take in reviews, statically display ML results", "Dynamic logic to query APIs, conditionally display stored stocks/available flights", "Algorithm to compare input scores to company values and return appropriate result", "Coded conditional interactive logic using npm inquirer package to emulate manager-inventory interactions"]
    },
    {
        name: "Python",
        image: "python.png",
        details: ["Implemented numerous variations of classic algorithms with strong runtime considerations", "Worked with data structures (examples include stacks, priority queues, dictionaries, BSTs, DAGs, MSTs, etc.)", "Some experience building small-scale applications with Django and Flask"],
        projects: [graphAlgorithms, sortingAlgorithms, stackqueue, hashing, recursion, bsts], 
        descriptions: ["Problems involving DAGs, topsort, shortest path, MSTs, and more", "Implementation of multiple sorting algorithms/analysis of their runtimes and tradeoffs", "Different implementations of stacks/queues/priority queues/them as the basis of other problems", "Building Python dictionaries/surface level analysis of the math behind their runtimes", "Variety of problems that can be divided into smaller subomponents/base cases", "Implementation of efficient searching/structure to store for future searches"]
    },
    {
        name: "Java",
        image: "java.jpg",
        details: ["Designed elaborate applications using object-oriented paradigm", "Implemented complex algorithms (machine learning variants, PageRank, etc.) with rigorous unit testing", "Used JavaFX to design GUIs for multiple interactive applications"],
        projects: [othello, decisionTree, pagerank, heap, tetris],
        descriptions: ["Object-Oriented design with over 15 classes to combine game logic and multiple levels of AI opponent", "Recursive logic to mathematically calculate information gain and entropy, before iteratively deciding which attribute to split on", "Implemented directed/undirected graph with adjacency matrix as basis for subsequent Prim-Jarnik and Page Rank algorithms", "Implementation of a priority queue using underlying heap structure with rigorours unit testing", "Game logic modeling board as a two-dimensional array of pieces"]
    },
    {
        name: "Node.js",
        image: "nodejs.jpg",
        details: ["Built multiple coupled applications with node facilitating back-end servers", "Used in tandem with multiple npm packages to provide interactive functionality for users", "Unified distinct features of MVC applications under a single programming language paradigm"],
        projects: [fridge, bestGig, jobFinder, clMarketplace],
        descriptions: ["Concurrent execution of multiple servers/backend routing", "Provides environment to sync data intake and routing to distinct views", "Runtime environment for backend server independent of browser logic", "Created environment to execute javascript independent of the browser"]
    },
    {
        name: "HTML",
        image: "htmlPic.png",
        details: ["Styled front-end designs with intrinsic HTML elements", "Used in tandem with DOM manipulation libraries like JQuery", "Applied principles to frameworks with similar syntax, like React's JSX"],
        projects: [bestGig, finfo, jobFinder],
        descriptions: ["Used combination of inherent components and Bootstrap styles to create dynamic interaction", "Combinations of intrinsic HTML elements and wrapper divs to ensure proper rendering", "Styled symmetric layout for both discover and survey pages"]
    },
    {
        name: "React",
        image: "react2.jpg",
        details: ["Built fully React interfaces with complex hierarchies of nested components/state", "Integrated existing React libraries (like Material UI) into full-stack applications", "Working on transitioning web applications to mobile versions with React Native"],
        projects: [fridge],
        descriptions: ["Integrated with Material UI to dynamically display user ingredients/potential recipes"]
    },
    {
        name: "JQuery",
        image: "jquery2.png",
        details: ["Used to provide DOM manipulation for purely front-end applications", "Combined with back-end server side code to dynamically manipulate client-side views", "Integrated with three dimensional CSS to produce comprehensive aesthetic designs"],
        projects: [bestGig, finfo, jobFinder],
        descriptions: ["Dynamic mixture of posts, puts, and gets to retrieve and append relevant information", "Frontend DOM manipulation/ajax calls to retrieve information relevant to a particular user", "Logic to intake user survery values and set appropriate post request"]
    },
    {
        name: "CSS",
        image: "css.png",
        details: ["Integrated vast array of specific properties to improve visual appeal of various applications", "Used similar syntax to style React components", "Combined with media queries to ensure mobile responsiveness for multiple web applications"],
        projects: [fridge, bestGig, finfo, jobFinder],
        descriptions: ["Combined inherent React styling with built in Material UI styles", "Flexbox/relative positioning and traditional margin, color, etc. styling", "Combination of flexbox properties, classes, ids, and specific properties to give elements various styles", "Individual element stying through mixture of classes and ids"]
    },
    {
        name: "TensorFlow",
        image: "tensorflow.png",
        details: ["Coded polynomial regression model with multiple layers to estimate Uber fares from ride distance", "Working on building larger layered network to provide more accurate earnings estimates to gig workers", "Taking Deep Learning course that emphasizes building multi-layered neural networks"],
        projects: [bestGig],
        descriptions: ["Built polynomial regression model to estimate an Uber fare from the distance of a trip (modeled after the Tensorflow.js documentation)"]
    },
    {
        name: "Bootstrap",
        image: "boostrap3.png",
        details: ["Combined inherent components with multiple full-stack applications to build smooth UI", "Implemented various versions of inherent grid system to make web applications mobile responsive", "Integrated inherent Bootstrap styling with CSS properties (with mx as an example of the contrasts in syntax)"],
        projects: [bestGig, finfo, jobFinder],
        descriptions: ["Grid system and built in components integrated with overall layout", "Grid system/intrinsic styling to render elements in appropriate locations", "Grid system for responsive layout on multiple pages"]
    },
    {
        name: "Express",
        image: "express2.jpg",
        details: ["Created back-end servers using express functionality", "Used middleware to facilitate application routing", "Implemented alongside callbacks to ensure proper timing of requests and responses"],
        projects: [fridge, bestGig],
        descriptions: ["Constructed middleware for deployed site and production version", "Created a series of different views and routes to provide users with multiple pages of content"]
    },
    {
        name: "Firebase",
        image: "firebase.jpg",
        details: ["Implemented user authentication feature on small scale application", "Stored data associated with users that could be continuously accessed and updated", "Currently learning cloud storage and realtime database features"],
        projects: [finfo],
        descriptions: ["User authentication features/storage of their particular saved stocks"]
    },
    {
        name: "Mongoose",
        image: "mongoose.png",
        details: ["Used mongoose ORM to create strict ORM requirements on loose MongoDB data", "Provided relational functionality in a noSQL environment", "Maintained simple Mongo syntax while providing additional framework to structure data"],
        projects: [fridge],
        descriptions: ["Modeled schemas to store user identification/unique identifiers"]
    },
    {
        name: "MongoDB",
        image: "mongo.png",
        details: ["Implemented backend storage features for large-scale applications", "Used loose JSON syntax to store data and associated key-value pairs", 'Combined with ORMs like Mongoose to construct some degree of relational functionality while maintaining the intrinsic benefits of a noSQL database'],
        projects: [fridge],
        descriptions: ["Created underlying infrastructure for storing users, fridges, and their ingredients"]
    },
    {
        name: "MySQL",
        image: "mysql.jpg",
        details: ["Used strict relational features to manage backend of complex applications", "Coded queries in both raw SQL and in concert with wrapper ORMs", "Designed networks of relations to ensure scalability and efficiency"],
        projects: [bestGig, clMarketplace],
        descriptions: ["Stored companies, reviews, users and their corresponding values/relationships", "Wrote raw queries to create table and seed initial data, along with framework to continuously update"]
    },
    {
        name: "Sequelize",
        image: "sequelize.jpg",
        details: ["Simplified lengthy MySQL syntax into smoother format", "Used promise-based flow of control to ensure smooth interactions between frontend and backend of applications", "Maintained benefits of relational database while writing queries in a format more consistent with Javascript"],
        projects: [bestGig],
        descriptions: ["Leveraged friendlier JSON syntax to create object models with specific definitions"]
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
    for (var j = 0; j < element.details.length; j++) {
        $("#skillsList").append(`<li>${element.details[j]}</li>`)
    }
    for (var i = 0; i < element.projects.length; i++) {
        console.log("This ran for", i);
        if (!element.projects[i].academic) {
            var newCard = $(`<div class='card projectCard'>
            <img class= 'card-img-top' src = ${'assets/images/' + element.projects[i].image} alt = 'Card image cap' >
            <div class='card-body'>
                <h3 class='card-title styledText'>${element.projects[i].name}</h3>
                <p class='card-text styledText'>${element.descriptions[i]}</p>
                <div class = "gitWrapper">
                <a href=${element.projects[i].repoLink} target = '_blank' class='btn btn-primary' >Explore the Git Repo</a>
                </div>
            </div>
    </div > `);
        }
        else {
            var newCard = $(`<div class='card projectCard'>
            <img class= 'card-img-top' src = ${'assets/images/' + element.projects[i].image} alt = 'Card image cap' >
            <div class='card-body'>
                <h3 class='card-title styledText'>${element.projects[i].name}</h3>
                <p class='card-text styledText'>${element.descriptions[i]}</p>
                <p class='subtext styledText'>Academic Project, Code Upon Request</p>
            </div>
    </div > `);
        }

        $("#section" + i).append(newCard);
        // $("section1").append("<p>Test text</p>");
    }
}

function emptyCards() {
    $("#skillsList").empty();
    for (var i = 0; i < 6; i++) {
        $("#section" + i).empty();
    }
}


