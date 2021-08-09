//define vars t hold time values
let nanoseconds=0;
let seconds=0;
let minutes=0;
let hours=0;

//define vars to hold display value 
let dispalyNanoseconds = 0;
let dispalySeconds = 0;
let displayMinutes = 0;
let displayHours = 0 ;

//define var to hold setInterval()function
let interval= null;

//define var to hold stopwatch status
let status ="Stopped";


//stopwatch function (logic to  determine when to increment next value etc )
function stopwatch(){
    nanoseconds++;
    //logic to determine when to increment next value
    if(nanoseconds/1000==1){
        nanoseconds=0;
        seconds++;

        if(seconds/60==1){
            seconds=0;
            minutes++;

            if(minutes/60==1){
                minutes=0;
                hours++;
            }
        }
    }
    //if seconds/minutes/hours are only one digit add a eading 0 to the value
    
    if(seconds < 10){
        dispalySeconds = "0" + seconds.toString();
    }
    else
    {
        dispalySeconds=seconds;
    }
    
    if(minutes<10)
    {
        displayMinutes="0" + minutes.toString();
    }
    else{
        displayMinutes=minutes;
    }
    if(hours<10)
    {
        displayHours="0" + hours.toString();
    }
    else{
        displayHours=hours;
    }
    

    // display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + dispalySeconds + ":" + nanoseconds ;

}

function StartStop()
{
    if (status=="Stopped")
    {
        //start the stopwatch
        interval=window.setInterval(stopwatch,1);
        document.getElementById("StartStop").innerHTML="Stop";
        status="started";

    }
    else{
        window.clearInterval(interval);
        document.getElementById("StartStop").innerHTML="Start";
        status="Stopped";
    }

}

function reset()
{
    window.clearInterval(interval);
    nanoseconds=0;
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("display").innerHTML="00:00:00:00";
    document.getElementById("StartStop").innerHTML="Start";
    
}