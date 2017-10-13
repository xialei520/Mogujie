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
	//对商品进行选择颜色=========================================
	
	$(".shop_detail .shop_detail_left .shop_detail_left_price .require .img").on("mouseover", "img", function(){
		$(this).css("border", "2px solid #666");
	})
	$(".shop_detail .shop_detail_left .shop_detail_left_price .require .img ").on("click", "img", function(){
	}) 
	$(".shop_detail .shop_detail_left .shop_detail_left_price .require .img ").on("click", "a", function(){
		$(".shop_detail .shop_detail_left .shop_detail_left_price .require .img a").css("border", "2px solid white").css("background", "none");
		$(this).css();
		$(this).css("border", "2px solid #666").css("background-image", "url(../images/eeee_ieygcmbsmuywcnzxmiytambqgiyde_11x11.png) no-repeat 100% 100%");

	})
	$(".shop_detail .shop_detail_left .shop_detail_left_price .require .img").on("mouseout", "img", function(){
		$(this).css("border", "2px solid white");
	})

	// 商品数量的增加和减少=====================================================
	 

	$("#add").click(function(){
 		var num = parseInt($("#quantity").val()) + 1;
 		$("#quantity").attr("value",num);
 	})
 	$("#min").click(function(){
 		var num = parseInt($("#quantity").val()) - 1;
 		if(num>=1){
 			$("#quantity").attr("value",num);
 		}

 		
 	})
	 
	// 给图片加hover事件====================================================
	$(".shop_detail .shop_detail_ .shop_detail_photo .thumbnail .thumbnail_").on("mouseover", "a", function(){
		$(".shop_detail .shop_detail_ .shop_detail_photo .thumbnail .thumbnail_ a img").css("border-bottom", "0");
		$(".shop_detail .shop_detail_ .shop_detail_photo .thumbnail .thumbnail_ a").css("opacity", "0.6");
		$(this).find("img").css("border-bottom", "2px solid red");
		$(this).css("opacity", "1");
		$(".shop_detail .shop_detail_ .shop_detail_photo .displayframe img").css("display", "none");
		$(".shop_detail .shop_detail_ .shop_detail_photo .displayframe img").eq($(this).index()).css("display", "block");
	})

	$(".shop_detail .shop_detail_ .shop_detail_photo .thumbnail_right").click(function(){
		$(this).css("display", "none");
		$(".shop_detail .shop_detail_ .shop_detail_photo .thumbnail_left").css("display", "block");
		$(".shop_detail .shop_detail_ .shop_detail_photo .thumbnail .thumbnail_").stop().animate({left:-336},1000,function(){})
	})
	$(".shop_detail .shop_detail_ .shop_detail_photo .thumbnail_left").click(function(){
		$(this).css("display", "none");
		$(".shop_detail .shop_detail_ .shop_detail_photo .thumbnail_right").css("display", "block");
		$(".shop_detail .shop_detail_ .shop_detail_photo .thumbnail .thumbnail_").stop().animate({left:0},1000,function(){})
	
	})


	 // 加载左边数列数据========================================
	$.ajax({
		url:"../json/commodity_details.json",
		type:"POST",
		dataType:"json",
			 

		success:function(data){
			var html = "";
			for(var i in data){
				html +=  '<div class="see_content_eve"><a href="#"><img src="' + data[i].img + '"></a><a href="#">' + data[i].desc + '</a><div><span>' + data[i].price + '</span><span><em></em>20</span></div></div>'  
			}
			$(".down .down_left .down_left_third .see_content").html(html);
			//加载相似商品数据=========================================
			$(".down .down_mid .down_mid_content .product_detail .product_detail_similar").html(html);

			 $(".down .down_mid .down_mid_content .same_goods .same_goods_content").html(html);
		}
	})

	// 给选项卡添加事件=========================================
	$(".down .down_mid .down_mid_top").on("click", "li", function(){
		$(".down .down_mid .down_mid_top li a").css("border", "0").css("background", "#f6f6f6");
		$(this).find("a").css("border-top", "4px solid #ef2f23").css("background", "#fff");
		$(".down .down_mid .down_mid_content>div").css("display", "none");
		$(".down .down_mid .down_mid_content>div").eq($(this).index()).css("display", "block");
		$(".down .down_right ul").css("display", "none");

		if($(this).index() == "0"){
			$(".down .down_right ul").css("display", "block");
		}else{
			$(".down .down_right ul").css("display", "none");

		}
		return false;
	})

	//给右侧菜单加事件=============================================================
	$(".down .down_right ul").on("click", "li", function(){
		$(".down .down_right ul li").css("background", "none");
		/*$(".down .down_right ul li").find("a").css("color", "#666").css("font-weight", "400");*/
		$(this).css("background", "url(../images/upload_ie2wgnrtmy4tim3bgmzdambqhayde_204x30.png) no-repeat");
		$(this).find("a").css("color", "#333").css("font-weight", "700").css("background", "0 238px");
	})
})