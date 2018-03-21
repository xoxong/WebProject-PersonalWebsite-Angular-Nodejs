
$(function(){
	//换颜色
	var colorfasle=true;
	　$(".huancolor").on('click',function(){
		bianhuancolor("header_box","bottom_box");
		
	});
	//变化颜色
	function bianhuancolor(cls,cls2){
		if(colorfasle){
			$("."+cls+",."+cls2).addClass('huanmanColor');
			$("."+cls+",."+cls2).removeClass('huanmanColor2');
			$("."+cls+",."+cls2).css('background-color','#272822');
			colorfasle=false;
		}
		else{
			$("."+cls+",."+cls2).addClass('huanmanColor2');
			$("."+cls+",."+cls2).removeClass('huanmanColor1');
			$("."+cls+",."+cls2).css('background-color','#27AE60');
			colorfasle=true;	
		}
	};
	//直接变化颜色
	function zhijiecolor(cls,cls2,num){
		if(num=="1"){
			$("."+cls+",."+cls2).addClass('huanmanColor');
			$("."+cls+",."+cls2).removeClass('huanmanColor2');
			$("."+cls+",."+cls2).css('background-color','#272822');
			
		}
		else{
			$("."+cls+",."+cls2).addClass('huanmanColor2');
			$("."+cls+",."+cls2).removeClass('huanmanColor1');
			$("."+cls+",."+cls2).css('background-color','#27AE60');
			
		}
	};
	
	//搜索文字狱
	$(".header_main_box input").on('focus',function(){
		$(".form-group").animate({height:'300px'},1500);
		rotation();	
	})
	$(".header_main_box input").on('blur',function(){
		$(".form-group").animate({height:'50px'},500);
		//暂停
		$("#xzimg").stopRotate();
		
	})
	//旋转
//	function rotation (){
//		   $("#xzimg").rotate({
//	 		     angle: 0,   
//		        animateTo: 360,
//		        callback: rotation
//		   });
//		};
//	
	//图片查看添加
	$(".card_box1 .li2 span").on('click',function(){
		$(this).parent("li").animate({height:'500px'},1000);
		$(this).parent("li").css("box-shadow","0px 0px 15px black");
		$(this).hide(900);
		$(this).parent("li").css({"background-color":"#27AE60","color":"white"});
		$(this).parent("li").find("img").show(500);
		$(this).parent("li").find(".img2").show(500);
	})
	//上拉回复
	$(".card_box1 .li2 img").on('click',function(){
		$(this).parent("li").animate({height:'30px'},1000);
		$(this).parent("li").css({"background-color":"white","color":"lightslategray"});
		$(this).parent("li").css("box-shadow","0px 0px 0px ");
		
		$(this).parent("li").find("span").show(2000);

		$(this).parent("li").find(".img2").hide(1500);
		$(this).parent("li").find(".img1").hide(1500);

	})	
	
	//第二个按钮点击切换颜色
	angular.element(".zhanshi_moshi_box button:eq(1),button:eq(2)").on('click',function(){
					zhijiecolor("header_box","bottom_box",1);
				})
	angular.element(".zhanshi_moshi_box button:eq(0)").on('click',function(){
					zhijiecolor("header_box","bottom_box",2);
				})

}); 
