$(function(){
	 $.fn.extend({
				tab: function(){
					//this 相当于 $("#div1");
					var _this = this;
					this.find(".secondarypage_menu ul li a").click(function(){
						//将所有的button和div的样式取消掉
						_this.find(".secondarypage_menu ul li a").css("background", "#fafafa").css("border-top", "0");
						_this.find('.secondmenu').css("display", "none");
						//将当前被点击的按钮的样式设置
						$(this).css("background", "white").css("border-top", "2px solid #f46");
						_this.find('.secondmenu').eq($(this).index()).css("display", "block");
					})
				}
			})


			$("#menu").tab();
/*	$(".secondarypage_menu ul").on("click", "a", function(){
		$(".secondarypage_menu ul li a").css("background", "#fafafa").css("border-top", "0");
 
		$(this).css("background", "white").css("border-top", "2px solid #f46");
		if($(this).index() % 2 == 0){
			$(".secondmenu").css("display", "none")
			$(".secondmenu1").css("display", "block")
		}else{
			$(".secondmenu").css("display", "none")
			$(".secondmenu2").css("display", "block")
		}
	})*/
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
			
			/*var html2 = "";
			 for(var i in data.content_photo){
			 	html2 += '<img src="' + data.content_photo[i].img + '" />' 
			 }*/
				
			/* 
			$(".secondmenu .secondmenu_left div:nth-of-type(1) p .secondmenu_left_photo").html(html2);*/
//			 var html3  ="";
//			for(var i in data.content_one){
//				html3 += '<a href="#">' + data.content_one[i].text + '</a>'
//			}
//			$(".secondmenu .secondmenu_left div:nth-of-type(1) p").html(html3);
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
