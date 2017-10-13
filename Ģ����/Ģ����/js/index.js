 $(function(){
 //给菜单添加hover事件
 
	$(".picture .Menu").on("mouseover", "li", function(){
		$(this).css("border-left", "1px solid red").css('background', "white");
	});
	$(".picture .Menu").on("mouseout", "li", function(){
		$(this).css("border", "").css("background", '');
	})
//设置固定定位顶部菜单===================
	$(window).scroll(function(){
		if($(this).scrollTop() > 604){
			$(".Floatingmenu").css("display" ,"block");
			$(".Floatingmenu .Floatingmenu_title").mouseover(function(){
				$(".picture .Menu").css("position", "fixed").css("top", "50px").css("z-index", "3").css("background", "rgba(0,0,0,0.7)")
				$(".picture .Menu li>a").css("color", "white");
				$(".picture .Menu").on("mouseover", "li", function(){
					$(this).css("background", "rgba(0,0,0,0.8)")
				})
				
				$(".picture .Menu").mouseover(function(){
					$(".picture .Menu").css("position", "fixed").css("top", "50px").css("z-index", "3").css("background", "rgba(0,0,0,0.7)")
					$(".picture .Menu li>a").css("color", "white");
				})
			})
			$(".Floatingmenu .Floatingmenu_title").mouseout(function(){
				$(".picture .Menu").css("position", "absolute").css("background", "rgba(250,250,250,0.6)");
				$(".picture .Menu").mouseout(function(){
					$(".picture .Menu").css("position", "absolute").css("background", "rgba(0,0,0,0.6)")
					 
				})
			})
		}else{
			$(".Floatingmenu").css("display" ,"none");
			$(".picture .Menu").css("position", "absolute").css("top", "0").css("left", "0").css("background", "rgba(250,250,250,0.6)")
			$(".picture .Menu li>a").css("color", "#666666");
			$(".picture .Menu").mouseover(function(){
					$(".picture .Menu").css("position", "absolute").css("top", "0").css("background", "rgba(250,250,250,0.6)")
					$(".picture .Menu li>a").css("color", "#666666");
					
					$(".picture .Menu").on("mouseover", "li", function(){
					$(this).css("background", "white")
				})
			})
			$(".picture .Menu").mouseout(function(){
					$(".picture .Menu").css("position", "absolute").css("top", "0").css("background", "rgba(250,250,250,0.6)")
					 
			})
		}
	
	})
//设置侧边栏菜单======================
	 
	 $(".sidemenu").on("mouseover", "div", function(){
	 	$(this).css("background", "#ef2f23");
	 });
	 $(".sidemenu").on("mouseout", "div", function(){
	 	$(this).css("background", "#202020");
	 });
//返回顶部=====================================
	$(window).scroll(function(){
		if($(this).scrollTop() > 0){
			$(".sidemenu div:nth-of-type(5)").css("display" ,"block");
		}else{
			$(".sidemenu div:nth-of-type(5)").css("display" ,"none");
		}
	
	})
	$(".sidemenu div:nth-of-type(5)").click(function(){
		$("body,html").stop().animate({
			scrollTop:0
		},600);
	})

	 
	 
	 //============================
	 //全局添加上下移动hover事件===========
	 $(".background .banner_bottom").on("mouseover", '.hover' , function(){
	 	$(this).find("img").stop().animate({left:-7});
	 });
	 $(".background .banner_bottom").on("mouseout", '.hover' , function(){
	 	$(this).find("img").stop().animate({left:0});
	 });
	 
	 $(".background .banner_bottom a").on("mouseover", '.onedollar' , function(){
	 	$(this).find("img").stop().animate({left:-7});
	 });
	 $(".background .banner_bottom a").on("mouseout", '.onedollar' , function(){
	 	$(this).find("img").stop().animate({left:0});
	 });
	 
	 $(".background .brandsale .brandsale_content .brandsale_content_second").on("mouseover", "a", function(){
	 	$(this).find("img").stop().animate({top:-7});
	 });
	  $(".background .brandsale .brandsale_content .brandsale_content_second").on("mouseout", "a", function(){
	 	$(this).find("img").stop().animate({top:0});
	 });
	 
	 $(".background .brandsale .brandsale_content .brandsale_content_first").mouseover(function(){
	 	$(this).find("img").stop().animate({top:-7});
	 });
	  $(".background .brandsale .brandsale_content .brandsale_content_first").mouseout(function(){
	 	$(this).find("img").stop().animate({top:0});
	 });
	 
	 $(".background .brandsale .brandsale_content .brandsale_content_first div:nth-of-type(1)").on("mouseover", "span", function(){
	 	$(this).css("background","rgba(0,0,0,0.4)");
	 });
	 $(".background .brandsale .brandsale_content .brandsale_content_first div:nth-of-type(1)").on("mouseout", "span", function(){
	 	$(this).css("background","rgba(172,172,189,0.6)");
	 });
	 
	 $(".background .red_people .red_people_content div:nth-of-type(2)").on("mouseover", "a", function(){
	 	$(this).stop().animate({opacity:0.7});
	 });
	  $(".background .red_people .red_people_content div:nth-of-type(2)").on("mouseout", "a", function(){
	 	$(this).stop().animate({opacity:1});
	 });
	 
	 $(".background .brandsale .brandsale_content .brandsale_content_third").on("mouseover", "a", function(){
	 	$(this).stop().animate({opacity:0.5});
	 	
	 });
	  $(".background .brandsale .brandsale_content .brandsale_content_third").on("mouseout", "a", function(){
	 	$(this).stop().animate({opacity:1});
	 	
	 });
	 
	 $(".background .brandsale .brandsale_content .dayselect_content_third").mouseover(function(){
	 	$(this).stop().animate({opacity:0.6});
	 });
	  $(".background .brandsale .brandsale_content .dayselect_content_third").mouseout(function(){
	 	$(this).stop().animate({opacity:1});
	 });
	 
	  $(".background .brandsale .brandsale_content .womenshoes_content_third .womenshoes_content_third_bottom").on("mouseover", "a", function(){
	 	$(this).find("i").stop().animate({opacity:0.7});
	 	
	 });
	  $(".background .brandsale .brandsale_content .womenshoes_content_third .womenshoes_content_third_bottom").on("mouseout", "a", function(){
	 	$(this).find("i").stop().animate({opacity:1});
	 	
	 });
	 
	 $(" .background .brandsale .brandsale_content .womenshoes_content_third .handbag_content_third_bottom").mouseover(function(){
	 	$(this).find("i").stop().animate({opacity:0.7});
	 });
	 $(".background .brandsale .brandsale_content .womenshoes_content_third .handbag_content_third_bottom").mouseout(function(){
	 	$(this).find("i").stop().animate({opacity:1});
	 });
	 //=============================
 //给标题栏添加hover事件
 	$(".head_meau li:eq(2)").mouseover(function(){
		$(".shopping_cart").css("display", "block");

	}).mouseout(function(){
		$(".shopping_cart").css('display', "none");
	})


	$(".head_meau li:eq(3)").mouseover(function(){
		$(".client").css("display", "block");

	}).mouseout(function(){
		$(".client").css('display', "none");
	}).on("mouseover", "p", function(){
		$(this).css("background", "#E4E4E4");
	}).on('mouseout', "p", function(){
		$(this).css("background", "#f2f2f2");
	})


	$(".head_meau li:eq(4)").mouseover(function(){
		$(".smallshop").css("display", "block");

	}).mouseout(function(){
		$(".smallshop").css('display', "none");
	}).on("mouseover", "p", function(){
		$(this).css("background", "#E4E4E4");
	}).on('mouseout', "p", function(){
		$(this).css("background", "#f2f2f2");
	})


	//商品搜索分类
	$(".top .top_mid .search1 span,.Floatingmenu .search1 span").hover(function(){
		$(".search_classify").css("display", "block").on("mouseover", "p", function(){
			$(this).css("background", "#FFEEF4");
		}).on('mouseout', "p", function(){
			$(this).css("background", "white");
		});
	}, function(){
		$(".search_classify").css("display", "none");
	})
	//给搜索框添加焦点事件
	$(".top .top_mid .search1 input,.Floatingmenu .search1 input").focus(function(){
		$(this).attr("placeholder", '');
		$(".history").css("display", "block");
	}).blur(function(){
		$(this).attr("placeholder", '烟灰色牛仔裤');
		$(".history").css("display", "none");
	})
	//添加图片轮播事件
	var aImg = $(".banner").find("img");
	var oP = $(".picture .banner .banner_button a p");
	var timer = null;
	var timer = setInterval(timerInner, 3000);
	var iNow = 0;//用于记录图片的下标
	aImg.css("opacity", "0");
	aImg.eq(iNow).css("opacity", "1");
	
	 oP.css("display", "none").eq(0).css("display", "block");
	 //设置banner的背景色
	var color_arr = ["#85AAF1", "#669BF9", "#F87300", "#9D48E4", "#FCD844", "#B9A5FA"];

	
	$(".picture .banner .banner_button").on("mouseover", "a", function(){
		iNow = $(this).index();
	 	oP.css("display", "none").eq(iNow).css("display", "block");
		
		tab();
	})
	function tab(){
		aImg.css("opacity", "0");
	 
		aImg.eq(iNow).stop().animate({opacity: 1 }, function(){});
		$(".picture").css("background", color_arr[iNow]);
		
	}
	//运动函数
	function timerInner(){
		iNow++;
//		document.title = iNow;
		oP.css("display", "none");
		oP.eq(iNow).css("display", "block");
		tab();
		if(iNow == aImg.size()){
			iNow = 0;
			oP.eq(0).css("display", "block");
			aImg.eq(iNow).css("opacity", "1");
			
		}
	}
	$(".picture .banner").stop().hover(function(){
		clearInterval(timer);
		 
	}, function(){
		timer = setInterval(timerInner, 3000);
	})
	
	
	
	//给二级菜单加载数据=====================
	 
	$(".Menu").on("mouseover", "li", function(){
		$(this).find(".secondary_menu1").css("display", "block");
		$.ajax({
			url:"../json/menu.json",
			type:"POST",
			dataType:"json",
			success:function(data){
//				console.log(data);
				
//				var arr = JSON.parse(data);
				var html = '';
				for(var i = 0; i < data.length; i++){
					html += '<div class="commodity_unity"><a href="#"><img src="' + data[i].img + '" /></a><a href="#" class = "text">' + data[i].title + '</a><a href="#">' + data[i].price + '</a></div>';
					
				}
				
				$(".commodity").html(html);
				//超出显示三个点
				var num = $('.text').size()
				for(var i=0; i<num; i++){
					var titleStr = $(".text").eq(i).text();
					var maxLen = 7;//设置要显示的字符数
					if(titleStr.length > maxLen){
					   $(".text").eq(i).html(titleStr.substring(0,maxLen)+"...");
					}
					else{
						$(".text").eq(i).html(titleStr);
					}
				}
			}
		 })
	});
	 

	
	$(".Menu").on("mouseout", "li", function(){
		$(this).find(".secondary_menu1").css("display", "none");
	});
	
	//倒计时========================
	function GetRTime(){
	    var EndTime= new Date('2019/09/20 00:00:00');
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
	 
	 
//	    document.getElementById("t_d").innerHTML = d + "天";
	    document.getElementById("t_h").innerHTML = toDub(h) ;
	    document.getElementById("t_m").innerHTML = toDub(m) ;
	    document.getElementById("t_s").innerHTML = toDub(s) ;
	    function toDub(n){
			 	return n < 10? "0" + n: n;
			 }
	  }
	  setInterval(GetRTime,1000);
	  
	//加载红人穿搭数据=======================
	$.ajax({
		url:"../json/red_people.json",
		type:"POST",
		dataType:"json",
		success:function(data){
//			alert(data);
			var html1 = '';
			for(var i = 0; i < 5; i++){
				html1 +='<a href="#"><img src="'+data.bigpic[i].img  +'"/><p>'+ data.bigpic[i].desc +'</p></a>';
			}
			$(".red_people_content div").eq(0).html(html1);
			var html2 = "";
			for(var i in data.smallpic){
				html2 +='<a href="#"><img src="'+data.smallpic[i].img  +'"/><p>'+ data.smallpic[i].desc +'</p></a>';
			}
			$(".red_people_content div").eq(1).html(html2);
		}
	 })
	
	//加载轮播图数据======================
	$.ajax({
		url:"../json/slideshow.json",
		type:"POST",
		dataType:"json",
		success:function(data){

//			var arr = JSON.parse(data);
//			alert(data);
			var html = "";
			for(var i in data){
				html += '<li><a href="#"><img src="' + data[i].img +'" /></a><a href="#">' + data[i].title + '</a><p><span>' + data[i].promotionPrice + '</span><span>' + data[i].originalPrice + '</span></p></li>';
			}
			$(".background .slideshow .slideshow_content div ul").html(html);
			 
		}
	})
	
	//让轮播图动起来========================
	var timerslide = null;
	var oUl =$(".background .slideshow .slideshow_content div ul");
	
	timerslide = setInterval(timerInner_, 4000);
	function timerInner_(){
		 oUl.animate({left: /*-oUl.offsetWidth / 2*/oUl.position().left-oUl.width() / 2},function(){

			 if(oUl.position().left <= -oUl.width()){
 			$(".background .slideshow .slideshow_content div ul").css("left", "0");
//				oUl.get(0).style.left="0";
			}
		});
	}
	
	//加载品牌特卖数据=======================
	$.ajax({
		url:"../json/brandselect.json",
		type:"POST",
		dataType:"json",
		success:function(data){

//			var arr = JSON.parse(data);
//			alert(data);
			var html = "";
			for(var i in data.one){
				html += '<a href="#"><div>' + data.one[i].title +'</div><div>' + data.one[i].desc + '</div><span></span><p><img src="' + data.one[i].img + '"/></p></a>'
			}
			$(".background .brandsale .brandsale_content .brandsale_content_second").html(html);
			 
		}
	})
	
	$.ajax({
		url:"../json/brandselect.json",
		type:"POST",
		dataType:"json",
		success:function(data){

//			var arr = JSON.parse(data);
//			alert(data);
			var html = "";
			for(var i in data.two){
				html += '<a href="#"> <img src="' + data.two[i].img + '"/></a>'
			}
			$(".background .brandsale .brandsale_content .brandsale_content_third").html(html);
			 
		}
	})
	
	//加载每日精选数据======================
	$.ajax({
		url:"../json/dayselect.json",
		type:"POST",
		dataType:"json",
		success:function(data){

//			var arr = JSON.parse(data);
//			alert(data);
			var html = "";
			for(var i in data){
				html += '<a href="#"><div>' + data[i].title +'</div><div>' + data[i].desc + '</div><span></span><p><img src="' + data[i].img + '"/></p></a>'
			}
			$(".background .brandsale .brandsale_content .dayselect_content_second").html(html);
			 
		}
	})
	
	
	//加载女装数据==========================
	$.ajax({
		url:"../json/womendress.json",
		type:"POST",
		dataType:"json",
		success:function(data){

//			var arr = JSON.parse(data);
//			alert(data);
			var html = "";
			for(var i in data.one){
				html += '<a href="#"><div>' + data.one[i].title +'</div><div>' + data.one[i].desc + '</div><span></span><p><img src="' + data.one[i].img + '"/></p></a>'
			}
			$(".background .brandsale .brandsale_content .womendress_content_second").html(html);
			 
		}
	})
	
	$.ajax({
		url:"../json/womendress.json",
		type:"POST",
		dataType:"json",
		success:function(data){

//			var arr = JSON.parse(data);
//			alert(data);
			var html = "";
			for(var i in data.two){
				html += '<a href="#"> <img src="' + data.two[i].img + '"/></a>'
			}
			$(".background .brandsale .brandsale_content .womendress_content_third").html(html);
			 
		}
	})
	
	//加载女鞋数据==========================
	$.ajax({
		url:"../json/womenshoes.json",
		type:"POST",
		dataType:"json",
		success:function(data){

//			var arr = JSON.parse(data);
//			alert(data);
			var html = "";
			for(var i in data.one){
				html += '<a href="#"><div>' + data.one[i].title +'</div><div>' + data.one[i].desc + '</div><span></span><p><img src="' + data.one[i].img + '"/></p></a>'
			}
			$(".background .brandsale .brandsale_content .womenshoes_content_second").html(html);
			 
		}
	})
	
	
	$.ajax({
		url:"../json/womenshoes.json",
		type:"POST",
		dataType:"json",
		success:function(data){
			var html = "";
			for(var i in data.two){
				html += '<a href="#"><i><img src="' + data.two[i].img + '" /></i><div><p>' + data.two[i].desc + '</p><p>' + data.two[i].price + '</p></div></a>'
			}
			$(".background .brandsale .brandsale_content .womenshoes_content_third .womenshoes_content_third_bottom").html(html);
			 
		}
	})
	
	//加载包包数据==========================
	$.ajax({
		url:"../json/handbag.json",
		type:"POST",
		dataType:"json",
		success:function(data){

//			var arr = JSON.parse(data);
//			alert(data);
			var html = "";
			for(var i in data.one){
				html += '<a href="#"><div>' + data.one[i].title +'</div><div>' + data.one[i].desc + '</div><span></span><p><img src="' + data.one[i].img + '"/></p></a>'
			}
			$(".background .brandsale .brandsale_content .handbag_content_second").html(html);
			 
		}
	})
	
	$.ajax({
		url:"../json/handbag.json",
		type:"POST",
		dataType:"json",
		success:function(data){

//			var arr = JSON.parse(data);
//			alert(data);
			var html = "";
			for(var i in data.two){
				html += '<i><img src="' +data.two[i].img + '" /></i><div>' + data.two[i].desc + '</div><div><p>' + data.two[i].discountprice + '</p><p>' + data.two[i].originalprice + '</p></div>'
			}
			$(".background .brandsale .brandsale_content .womenshoes_content_third .handbag_content_third_bottom").html(html);
			 
		}
	})
	
	//加载配饰数据
	$.ajax({
		url:"../json/accessory.json",
		type:"POST",
		dataType:"json",
		success:function(data){

//			var arr = JSON.parse(data);
//			alert(data);
			var html = "";
			for(var i in data.one){
				html += '<a href="#"><div>' + data.one[i].title +'</div><div>' + data.one[i].desc + '</div><span></span><p><img src="' + data.one[i].img + '"/></p></a>'
			}
			$(".background .brandsale .brandsale_content .accessory_content_second").html(html);
			 
		}
	})
	
	
	$.ajax({
		url:"../json/accessory.json",
		type:"POST",
		dataType:"json",
		success:function(data){

//			var arr = JSON.parse(data);
//			alert(data);
			var html = "";
			for(var i in data.two){
				html += '<a href="#"><i><img src="' + data.two[i].img + '" /></i><div><p>' + data.two[i].desc + '</p><p>' + data.two[i].price + '</p></div></a>'
			}
			$(".background .brandsale .brandsale_content .womenshoes_content_third .accessory_content_third_bottom").html(html);
			 
		}
	})
	
	//加载猜你喜欢数据
	$.ajax({
		url:"../json/youlike.json",
		type:"POST",
		dataType:"json",
		success:function(data){

//			var arr = JSON.parse(data);
//			alert(data);
			var html = "";
			for(var i in data){
				html += '<a href="#"><img src="' + data[i].img + '"/><p class="desc">' + data[i].desc + '</p><div><p><span>' + data[i].discountprice + '</span><span>' + data[i].originalprice + '</span></p><p><img src="../images/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png"/><span>8.2w</span></p></div><p class="similar">找相似</p></a>'
			}
			$(".background .like").html(html);
			 
		}
	})
	//给猜你喜欢添加hover事件==================
	$(".background .like").on("mouseover", "a", function(){
		$(this).find(".similar").css("display", 'block');
		$(this).css("border", "1px solid #f9699a")
	});
	$(".background .like").on("mouseout", "a", function(){
		$(this).find(".similar").css("display", 'none');
		$(this).css("border", "1px solid #f5f5f5");
	})
	
	//添加二维码图片hover
	$(".background .index_bottom .index_bottom_top div:nth-of-type(4)").on("mouseover", "span", function(){
		$(this).find("img").css("display", "block");
	})
	$(".background .index_bottom .index_bottom_top div:nth-of-type(4)").on("mouseout", "span", function(){
		$(this).find("img").css("display", "none");
	})
})
  