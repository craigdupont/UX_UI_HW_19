console.log("Your index.js file is loaded correctly!");

$("#clickMe").on('click', function() {/*this is the function to scroll down*/
    $("HTML, BODY").animate({
        scrollTop: 3500 /*parameter for disctance down */
    }, 1500);/*parameter for how fast scrolling down*/
});


