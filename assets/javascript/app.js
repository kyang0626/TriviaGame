
// Page starts.....
$(document).ready(function() {

//Hides the result until game ends....
$("section").hide();

// Variables...
var timeRemaining = 160; 

var intervalId;


// Functions...
function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeRemaining--;
    $("#count-number").html("<span>" + " " + timeRemaining + "<span>");

// When the time runs out, STOP the time......
    if (timeRemaining === 0) {
        stop();
        
        
    }
    
}

// During STOP function, hide the content
function stop() {
    clearInterval(intervalId);
    $("main").hide();
//Display what was hidden...
    $("section").toggle();
    for (var i = 1; i < 11; i++) {
        if ($("input[name=q" + i + "]:checked").val() === "right") {
            correct++;  
        } else if ($("input[name=q" + i +"]:checked").val() === "wrong") {
            incorrect++;
        } else {
            unanswered++;
        }
    }
    correctText.text(correct);
    incorrectText.text(incorrect);
    unansweredText.text(unanswered); 
}


run();


// Questions & Logic.... <--- Still Working On THIS!!! ----->

var correct = 0;
var incorrect = 0;
var unanswered = 0;

var correctText = $("#correct");
var incorrectText = $("#incorrect");
var unansweredText = $("#unanswered");

$("#done").on("click", function() {
    stop();
    
          
    
})





})













 









