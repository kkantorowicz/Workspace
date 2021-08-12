console.log("jQuery Overview now logging... ");

//Do I even NEED doc.ready now that we have defer in the script tag?

// $(document).ready(function () {
//     // Why the hell would anyone use this... 
//     document.write("Hello, World!");
// });

$("button").click(function () { alert("Hello, World!") });