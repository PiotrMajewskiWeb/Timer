// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function StartTimer() {
    function CheckForAddZeroBeforeInt(name)
    {
        if (name == 0 ||
            name == 1 ||
            name == 2 ||
            name == 3 ||
            name == 4 ||
            name == 5 ||
            name == 6 ||
            name == 7 ||
            name == 8 ||
            name == 9
        )
            return true;
        else
            return false;
    }
    // place this method after TimerMechanism
    function AddZeroAsString(calculatedValue)
    {
        let zeroAsString = "0";
        let value = calculatedValue;
        let result = zeroAsString + value;
        return result;

    }
    // add one second to value 
    function TimerMechanismCore(name,nameSPath)
    {
    // seconds 
        let valueToBeAdded = 1;
        let calculated = parseInt(name.innerText) + valueToBeAdded; // ex. 1 = 0 + 1
        if (CheckForAddZeroBeforeInt(calculated)) {
            let result = AddZeroAsString(calculated);
            name.innerText = result;
        }
        else
        {
        // set value to it's place
        name.innerText = calculated;
        }
    }
    // checks if value exeeded 60 seconds
    function TimerMechanism(nameS, nameM, nameH)
    {
        
        // start counting seconds
        TimerMechanismCore(nameS,s);
        // if seconds > 59 then reset seconds and start counting again and add 1 to minutes
        if (parseInt(nameS.innerText) > 59)
        {
            // reset seconds
            nameS.innerText = "00";
            // add minute
            nameM.innerText = parseInt(nameM.innerText) + 1;
        }
        // analogic here but u add 1 hour
        if (parseInt(nameM.innerText) > 59)
        {
            // reset minutes
            nameM.innerText = "00";
            // add one hour
            nameH.innerText = parseInt(nameH.innerText) + 1;
        }
    }
    var h = document.getElementsByClassName("hours")[0];
    var m = document.getElementsByClassName("minutes")[0];
    var s = document.getElementsByClassName("seconds")[0];
    // for testing here change start time
    // seconds
    s.innerText = 58;
    // minutes
    m.innerText = 59;
    // hours
    h.innerText = 58;
 // every second
    setInterval(function ()
    {
        TimerMechanism(s,m,h)
        console.log(s);

        //textContent
        //document.getElementsByClassName("hours")[0].innerText = h + 1;
        //document.getElementsByClassName("minutes")[0].innerText = ;
        //document.getElementsByClassName("seconds")[0].innerText = ;
    }, 1000);
    //clearInterval();
}
