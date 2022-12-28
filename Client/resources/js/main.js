document.getElementById('logo').addEventListener('mouseout', function() {
    this.src = '/resources/images/logo.PNG';
});
document.getElementById('logo').addEventListener('mouseover', function() {
    this.src = '/resources/images/logo2.PNG';
});

const urlPageTitle = "Trip Planner";

const routes = {
    404: {
        template: "404.html",
        title: "404",
        description: "Page not found",
    },
    "/": {
        template: "home.html",
        title: "Trip Creator HomePage",
        description: "This is the home page",
    },
    createAccount: {
        template: "createAccount.html",
        title: "Create Account",
        description: "This is the account creation page",
    },
    login: {
        template: "login.html",
        title: "Login",
        description: "This is the login page",
    },
};

const locationHandler = async () => {
    // get the url path, replace hash with empty string
    var location = window.location.hash.replace("#", "");
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = "/";
    }
    // get the route object from the routes object
    const route = routes[location] || routes["404"];
    // get the html from the template
    const html = await fetch(route.template).then((response) => response.text());
    // set the content of the content div to the html
    document.getElementById("content").innerHTML = html;
    // set the title of the document to the title of the route
    document.title = route.title;
    // set the description of the document to the description of the route
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};

// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();