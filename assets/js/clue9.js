
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
    var bondTrivia = document.getElementById("food").value;
    var result = bondTrivia.toString().toLowerCase();
    var finalResult = result.includes("pizza");
    if (finalResult == true) {
        window.location.href = "clue10.html";
    }
    else {
        document.getElementById("errorHandler").innerHTML = "Wrong Answer, Please Try again !!!";
    }
});

console.clear();