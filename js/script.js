/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#music").val();
        var q2Result = $("#spend").val();
        var q3Result = $("#genre").val();
        var q4Result = $("#value").val();
        var totalScore = q1(q1Result) + q2(q2Result) + q3(q3Result) + q4(q4Result);
        
function displayResult(name, placement, imgSrc){
    return $(".result").html("<h2>Congratulations, " + name + " you're going to be working at " + placement + "</h2>"+"<img src=" +imgSrc+">");
}
function q1(choice){
    if(choice === "Jazz"){
        return 5;
    }else if(choice === "Rock"){
        return 10;
    }else if(choice === "Classical"){
        return 15;
    }
}

function q2(choice){
    if(choice === "Reading"){
        return 5;
    }else if(choice === "Sports"){
        return 10;
    }else if(choice === "Learning"){
        return 15;
    }
}
function q3(choice){
    if(choice === "RPG's"){
        return 5;
    }else if(choice === "Shooters"){
        return 10;
    }else if(choice === "Platformers"){
        return 15;
    }
}
function q4(choice){
    if(choice === "Movement"){
        return 5;
    }else if(choice === "Content"){
        return 10;
    }
}
function placement(name, totalScore){
    var imgSrc;
    var placement;
    if(totalScore >= 20 && totalScore <= 35){
         placement="Melee"
         imgSrc="https://media.giphy.com/media/GBhoTh8AQcOXe/giphy.gif";
         displayResult(placement,name,imgSrc);
    }else if(totalScore >= 40 && totalScore <=45){
        
    }
}

    });
});
