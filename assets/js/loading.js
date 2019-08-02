
// console.log(document.cookie)

// if(document.cookie.replace(/(?:(?:^|.*;\s*)visited\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true"){
//     document.cookie = "randString";
//     setTimeout(showStuff, 1900);
// }
// else{
//     $('#mainContent').show();
// }

// function showStuff() {
//     $('#loadContent').css("display", "none");
//     $('#mainContent').fadeIn(2000);

// }

// function doOnce() {
//     if (document.cookie.replace(/(?:(?:^|.*;\s*)doSomethingOnlyOnce\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
//         // setTimeout(showStuff, 1900);
//         document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
//         setTimeout(showStuff, 3600);
//     }
//     else {
//         $('#loadContent').css("display", "none");
//         $('#mainContent').show();
//     }
// }

// function showStuff() {
//     $('#loadContent').css("display", "none");
//     $('#mainContent').fadeIn(4000);

// }

// doOnce();