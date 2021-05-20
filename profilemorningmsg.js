



// hide  Admin Postion div with fade effect click on cross button Start

var close = document.getElementsByClassName("alertShowPostionAdminclosebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

// hide  Admin Postion div with fade effect click on cross button End







// hide Goodmorning Message div with fade effect click on cross button Start


var close = document.getElementsByClassName("closebtnGoodmorning");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}


// hide Goodmorning Message div with fade effect click on cross button End






// show a message of morning night wish acording time Start 




        document.getElementById('ShowWishMorAdDetails');

        var day = new Date();
        var hr = day.getHours();

        if (hr >= 0 && hr < 12) 
        {
            document.getElementById('ShowWishMorAdDetails').innerHTML="Good Morning !";
        } 
        else if (hr == 12) 
        {
            document.getElementById('ShowWishMorAdDetails').innerHTML="Good Noon !";
        } 
        else if (hr >= 12 && hr <= 17)
        {
            document.getElementById('ShowWishMorAdDetails').innerHTML="Good Afternoon !";
        } 

        else if (hr >= 17 && hr <= 19)
        {
            document.getElementById('ShowWishMorAdDetails').innerHTML="Good Evening !";
        }
        else
        {
           document.getElementById('ShowWishMorAdDetails').innerHTML="Good Night !";
        }
        document.write("</font></center>");
        

// show a message of morning night wish acording time End


















