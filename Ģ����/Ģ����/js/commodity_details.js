$(function(){
	//倒计时========================
	function GetRTime(){
	    var EndTime= new Date('2017/10/20 00:00:00');
	    var NowTime = new Date();
	    var t =EndTime.getTime() - NowTime.getTime();
	    var d=0;
	    var h=0;
	    var m=0;
	    var s=0;
	    if(t>=0){
	      d=Math.floor(t/1000/60/60/24);
	      h=Math.floor(t/1000/60/60%24);
	      m=Math.floor(t/1000/60%60);
	      s=Math.floor(t/1000%60);
	    }
	 
	 
	    document.getElementById("d").innerHTML = toDub(d) ;
	    document.getElementById("h").innerHTML = toDub(h) ;
	    document.getElementById("m").innerHTML = toDub(m) ;
	    document.getElementById("s").innerHTML = toDub(s) ;
	    function toDub(n){
			 	return n < 10? "0" + n: n;
			 }
	  }
	  setInterval(GetRTime,1000);
})