{% Dim showTimer = CurrentADP.Var("showTimer") %}

{% If (showTimer = 1) Then  %} 
    (function(){
         window.setInterval(evalTimer, 1000);
         function evalTimer(){
           var d = new Date();
           var startInt = new Date( "{%= Interview.StartTime.Format("yyyy/MM/dd HH:mm:ss" )%}" );

           var elapsedTime = Math.floor((d.getTime() - startInt.getTime())/1000) ;
           document.getElementById("timerBottom").innerHTML = elapsedTime + " seconds"
         }
    })()
{% Endif %}