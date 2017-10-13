$(function(){
	  
 
	//加载菜单数据========================
	$.ajax({
		url:"../json/secondarypage_menu.json",
		type:"POST",
		dataType:"json",
		success:function(data){
			var html1 = "";
			for(var i in data.menu){
				html1 += '<li><a href="#">' + data.menu[i].text + '</a></li>'
			}
			$(".secondarypage_menu ul").html(html1);
			
			 //添加点击事件
			$(".secondarypage_menu ul").on("click", "a", function(){
				$(".secondarypage_menu ul li a").css("background", "#fafafa").css("border", "0");
				$(".menu .secondarypage_list .secondmenu").css("display", "none");
				$(this).css("background", "white").css("border-top", "2px solid #f46");
				$(".menu .secondarypage_list .secondmenu").eq($(this).index()).css("display", "block");
			})
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
			$(".like").html(html);
			 
		}
	})
	//给猜你喜欢添加hover事件==================
	$(".like").on("mouseover", "a", function(){
		$(this).find(".similar").css("display", 'block');
		$(this).css("border", "1px solid #f9699a")
	});
	$(".like").on("mouseout", "a", function(){
		$(this).find(".similar").css("display", 'none');
		$(this).css("border", "1px solid #f5f5f5");
	})
})
