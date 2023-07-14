
(function ($) {
    "use strict";

    // Loader
    $(function () {
        var loader = function () {
            setTimeout(function () {
                if ($('#loader').length > 0) {
                    $('#loader').removeClass('show');
                }
            }, 1);
        };
        loader();
    });

    // Auto Init 
    M.AutoInit();

})(jQuery);

// Play Music
body.addEventListener('click', function () {
    $("#autoPlayMusic")[0].play();
});

// Submit Answer
$("#submitAnswer").click(function () {
    var nameTrivia = document.getElementById("love").value;
    var result = nameTrivia.toString().toLowerCase();
    var finalResult = result.includes("love loop");
    if (finalResult == true) {
        window.location.href = "/Surprise.html";
    }
    else {
        document.getElementById("errorHandler").innerHTML = "Wrong Answer, Please Try again !!!";
    }
});

console.clear();