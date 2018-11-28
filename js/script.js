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
        console.log(q2(q2Result));
function q1(choice){
    if(choice === "Jazz"){
        return 1;
    }else if(choice === "Rock"){
        return 2;
    }else if(choice === "Classical"){
        return 3;
    }
}
function q2(choice){
    if(choice === "Reading"){
        return 1;
    }else if(choice === "Sports"){
        return 2;
    }else if(choice === "Learning"){
        return 3;
    }
}
function q3(choice){
    if(choice === "RPG's"){
        return 1;
    }else if(choice === "Shooters"){
        return 2;
    }else if(choice === "Platformers"){
        return 3;
    }
}
function q4(choice){
    if(choice === "Movement"){
        return 1;
    }else if(choice === "Content"){
        return 2;
    }
}
    });
    
    
});
