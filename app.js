var currentDate = new Date();
var targetDate = new Date(2025, 1, 28); 

var millisecondsDifference = targetDate.getTime() - currentDate.getTime();


// sec 
function second(){
var sec =Math.floor(millisecondsDifference/(1000)) 
return sec;

}
// min 
function minute(){
var min=Math.floor(millisecondsDifference / (1000*60)) 
return min;

}
// hour
function ghante(){
var hour = Math.floor(millisecondsDifference/(1000*60*60))
return hour;

}

// days 


function din(){
    var days = Math.floor(millisecondsDifference/(1000*60*60*24))
return days;
}
    



 
function update() {
    document.getElementById('day1').innerHTML=din();
    document.getElementById('hour1').innerHTML=ghante();
    document.getElementById('minutes1').innerHTML=minute();
    document.getElementById('seconds1').innerHTML=second();
}

update()
