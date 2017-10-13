$(function(){
	 
  	car_num()
 	/*$.ajax({
 		type:"GET",
 		url:"data.json",
 		success: function(res){
 			var html = "";
 			for(var i = 0; i < res.length; i++){
 				html += '<li class="goods_item"  ><div class="goods_pic"><img src="'+res[i].img+'" alt=""></div><div class="goods_title"><p>【京东超市】奥利奥软点小草莓</p></div><div class="sc"><div class="sc_btn" id="'+res[i].id+'" >加入购物车</div></div></li>';
 			}
 			$(".goods_box ul").html(html);
 		}

 	})*/
 	$("#0").click(function(){
 		 
 	 	sport(this);
 		// 
 		var id = this.id;
 		var first = $.cookie("goods") == null? true:false;
 		if(first){
 			$.cookie("goods", "[{id:" + id + ", num:1}]", {
 				expires:7
 			})
 		}else{
 			var str = $.cookie("goods");
 			var arr = eval(str);
 			var same = false;
 			for(var i in arr){
 				if(arr[i].id == id){
 					arr[i].num = Number(arr[i].num) + 1;
 					var cookieStr = JSON.stringify(arr);
 					$.cookie("goods", cookieStr, {
 						expires:7
 					});
 					same = true;

 				}
 			}
 			if(!same){
 				var obj = {id:id, num:1};
 				arr.push(obj);
 				cookieStr = JSON.stringify(arr);
 				$.cookie("goods", cookieStr, {
 					expires:7
 				})
 			}
 		 	car_num()
 		}
 		// alert($.cookie('goods'));
 		return false;
 	})

 	/*$(".sc_right").mouseenter(function(){
 		cartLoading();
 		$(this).stop().animate({
 			right:0
 		})
 	})
 	$(".sc_right").mouseleave(function(){
 		$(this).stop().animate({
 			right:-270
 		})
 	})*/
 	 function car_num(){
 	 	if($.cookie("goods")){
 	 		var cookieStr = $.cookie('goods');
 	 		var cookie_arr = eval(cookieStr);
 	 		var sum = 0;
 	 		for(var i in cookie_arr){
 	 			sum += cookie_arr[i].num;
 	 		}
 	 		$("#commodity_num").html(sum);
 	 	}
 	 }
 	 //添加商品作抛物线运动
 	 
 	function sport(node){
 		$("#ball").css({
 			display:"block",
 			left: $(node).offset().left,
 			top:$(node).offset().top
 		})
 		var offsetX = $("#commodity_num").offset().left - $("#ball").offset().left;
 		var offsetY = $("#commodity_num").offset().top - $("#ball").offset().top;

 		var bool = new Parabola({
		    el: "#ball",  		   //选择我们哪个物体需要进行抛物线运动
		    targetEl: null,
		    offset: [offsetX, offsetY],    //初始位置和最终，到达的偏移的坐标
		    curvature: 0.005,      //抛物线弯曲的曲率，越接近于0，就越平缓 
		    duration: 400,        //整个动画所用的时间
		    callback:function(){
		    					   //这个函数是在整个动画结束的时候调用
		        $("#ball").css("display", "none");
		    }

 		})
 		bool.start();
 	}


 	 
 		$.ajax({
	 		type:"GET",
	 		url:"../json/shop_cart.json",
	 		success: function(res){
	 			var sc_arr = eval($.cookie("goods"));
	 			var html = "";
	 			for(var i in sc_arr){
	 				html += '<div class="commodity_list_title"><input type="checkbox" name=" ' + sc_arr[i].id + ' "><a href="">' + res[sc_arr[i].id].title + '</a><a href=""></a><img src="' + res[sc_arr[i].id].img + '"></div><ul class="commodity_1"><li><input type="checkbox" name=" '+ sc_arr[i].id +' "></li><li><a href=""><img src="' + res[sc_arr[i].id].imgsrc + '" alt=""></a><a href="">' + res[sc_arr[i].id].desc + '</a></li><li><p>' + res[sc_arr[i].id].color + '</p><p>' + res[sc_arr[i].id].size + '</p></li><li><p>' + res[sc_arr[i].id].originalprice + '</p><p>' + res[sc_arr[i].id].discountprice + '</p><span>活动价</span></li><li><div><a href="#"></a><input type="text" value="' + res[sc_arr[i].id].num + '"><a href="#"></a></div></li><li><p>' + 1 * res[sc_arr[i].id].discountprice + '</p></li><li><p>删除</p></li></ul>'
	 			}
	 			$(".shop_cart").html(html);
	 			$(".commodity_1 li:nth-of-type(5) div:nth-of-type(1) a:nth-of-type(2)").click(function(){
			 		var num = parseInt($(".commodity_1 li:nth-of-type(5) div:nth-of-type(1) input").val()) + 1;
			 		$(".commodity_1 li:nth-of-type(5) div:nth-of-type(1) input").attr("value",num);
			 	})
			 	$(".commodity_1 li:nth-of-type(5) div:nth-of-type(1) a:nth-of-type(1)").click(function(){
			 		var num = parseInt($(".commodity_1 li:nth-of-type(5) div:nth-of-type(1) input").val()) - 1;
			 		if(num>=1){
			 			$(".commodity_1 li:nth-of-type(5) div:nth-of-type(1) input").attr("value",num);
			 		}

			 		
			 	})
			 	/*$(".commodity_1 li:nth-of-type(6) p").html(parseInt($(".commodity_1 li:nth-of-type(5) div:nth-of-type(1) input").val()) * parseInt($(".commodity_1 li:nth-of-type(4) p:nth-of-type(2)").html()))*/
	 		}

	 	})
  
 	 

 	//=====给购物车中商品添加事件============================================
 	$(".shop_cart").on("click", "input[type=checkbox]", function(){
 		var val=$(this).attr("name");
 		$("input[name=val]").attr("checked", true);
 	})
 	$(".commodity .commodity_list").find("ul").find("input[type=checkbox]").click(function(){
 		$("input[type=checkbox]").attr("checked",true)
 		var _this = this;
 		$(this).click(function(){
 			$(_this).attr("checked", false);
 			$("input[type=checkbox]").attr("checked",false)

 		})
 	 
 			$("input[type=checkbox]").attr("checked",true)
 		
 	})

// ===============================================================================

 	if($.cookie("goods")){
 		var cookieStr = $.cookie('goods');
 		var cookie_arr = eval(cookieStr);
 		var sum1 = 0;
 		for(var i in cookie_arr){
 			sum1 +=  1;
 		}
 		 
 	}
 	$(".commodity .commodity_list .commodity_payment .gotopayment div:nth-of-type(2) span").html(sum1);
 	$(".commodity .commodity_top li a span:nth-of-type(-n+2)").html(sum1);
 	// ============================================================================
 	
 	$(".commodity_1 li:nth-of-type(5) div:nth-of-type(1) a:nth-of-type(2)").click(function(){
 		alert(1);
 		$(".commodity_1 li:nth-of-type(5) div:nth-of-type(1) input").attr("value", "");
 	})

 	// ===================================================================================
 	$(".commodity_1 li:nth-of-type(7) p").click(function(){
 		$(this).parent().remove();
 	})

})