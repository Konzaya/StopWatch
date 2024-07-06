var isPause = true;
var sec = 0;
var min = 0;
var hr = 0;
function start()
{
    if(isPause == true)
    {
        isPause = false;
        timer();
    }
}

function timer()
{
    if(isPause == false)
    {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec++;

        if(sec == 60)
        {
            sec = 0;
            min++;
        }

        if(min == 60)
        {
            min = 0;
            hr++;
        }

        if(sec < 10)
        {
            sec = "0" + sec;
        }

        if(min < 10)
        {
            min = "0" + min;
        }

        if(hr < 10)
        {
            hr = "0" + hr;
        }
        stopWatch.innerHTML = hr + " : " + min + " : " + sec;
        setTimeout("timer()",1000);
    }

}

function pause()
{
    isPause = true;
}

function reset()
{
    isPause = true;
    sec = 0;
    min = 0;
    hr = 0;

    stopWatch.innerHTML = "00 : 00 : 00";
}