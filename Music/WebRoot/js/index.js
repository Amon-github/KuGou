
$(function() {
	/***
	 * ���ࣺ���غ���ʾ
	 */
	$("#hideul").hide();
	$("#more").hover(function() {
		$("#hideul").show();
		$("#img").css("background-position","0px -10px")
	}, function() {
		$("#hideul").hide();
		$("#img").css("background-position","0px 0px")
	})
	
	/**
	 * ���ࣺ�����hover�¼�
	 */
	$("#hideul li").hover(function(){
		$(this).children().css("color","white");
	},function(){
		$(this).children().css("color","#777777");
	})
	
	/***
	 * �û��˵������غ���ʾ
	 */
	$("#user_menu").hide();
	$("#usesr_btn").hover(function() {
		$("#user_menu").show();
	}, function() {
		$("#user_menu").hide();
	})
/**
	 * �û��˵��������hover�¼�
	 */
	$("#user_menu li").hover(function(){
		$(this).children().css("color","white");
	},function(){
		$(this).children().css("color","#777777");
	})
	
	
	
	/**
	 * banner
	 */
	$(".banner").Marquee({
				distance: 1920,
				time: 4,
				direction: 'left',
				btnGo: {
					right: '#goL',
					left: '#goR'
				},
				navId:'#marqueeNav'
			})
	
	$("#goL").hide();
	$("#goR").hide();
	$(".box").mouseover(function(){
		$("#goL").show();
		$("#goR").show();
	}).mouseout(function(){ 
		$("#goL").hide();
		$("#goR").hide();
	})
	
	/*���ֲ�*/
	$(".filter").hide();
	$(".filtershow").mouseover(function(){
		$(this).css("position","relative");
		$(this).children(".filter").show();
	})
	$(".filter").mouseout(function(){
//		$(this).parent(".jxgd_pic_left").css("position","absolute");
		$(this).hide();
	})
	
	
	/*���غ������
	var $ul=$(".part3 ul");
	for (var i=0;i<parners.length;i++) {
		var $li=$("<li><img src="+parners[i].url+"/></li>");
		$ul.append($li);
	}*/
	
	/*������������
	var $ul=$(".part4 ul");
	for (var i=0;i<friendlink.length;i++) {
		var $li=$("<li><a href="+friendlink[i].url+">"+friendlink[i].context+"</a></li>");
		$ul.append($li);
	}*/

	/*�ص�����*/
	$('#goToTop').hide();        //���ذ�ť
 	$(window).scroll(function(){
            //�쵽�ײ�ʱ�����ؼ�����Ų
            if($(this).scrollTop() >1000){
                $('#goToTop').css("bottom","50%");
            }else{
                 $('#goToTop').css("bottom","20%");
            }
            //��������400ʱ���ؼ�����
            if($(this).scrollTop() > 400){
                $('#goToTop').fadeIn(800);
            }else{
                $('#goToTop').fadeOut(300);
            }
        });
        
        
    /*��¼����*/
   $("#logon_btn").click(function(){
   	$(".cover").css("display","block");
   	$("#mini_login").css("display","block");
   })
   /*������ȡ����ť*/
   $(".cancle").click(function(){
   		$(".cover").css("display","none");
   		$("#mini_login").css("display","none");
   })
   
   /*�������ס���롯����ʱ����ѡ��Ķ�Ӧ����*/
   var index=false;
   $(".rempwd").click(function(){
   	if (index==false) {
   		$(this).children(".pwdcheckbox").prop("checked",true);
   		 index=true;
   	}else{
   		$(this).children(".pwdcheckbox").prop("checked",false);
   		 index=false;
   	}
   })
   
   
   
   /*��¼�ж�*/
   var boolname = false;
	var boolpwd = false;
	var umes = $(".umes"); //�û�����ʾ��Ϣ
	var pmes = $(".pmes"); //������ʾ��Ϣ
	umes.hide();
	pmes.hide();

	//��ֹ�ύ��ť
	$('.submit').css({
		"cursor": "not-allowed",
		"background": "gray"
	});
	document.getElementsByClassName("submit")[0].disabled = "disabled";


	/**
	 * ������ȡ�����ȡ�����㴦��
	 */
	$(".ip_right").focus(function() {
		this.style.border = "1px solid gray";

	}).blur(function() {
		//����û���������ĸ�ʽ
		var thisVal = this.value;
		if(thisVal.length >= 4 && thisVal.length <= 16) {
			this.style.border = "2px solid green";
			if("userName" == this.name) {
				umes.hide();
				boolname = true;
			} else if("password" == this.name) {
				pmes.hide();
				boolpwd = true;
			}
		} else {
			this.style.border = "2px solid red";
			if("userName" == this.name) {
				umes.show();
				boolname = false;
			} else if("password" == this.name) {
				pmes.show();
				boolpwd = false;
			}
		}
		
		if(boolname == true&&boolpwd == true){
				$('.submit').css({
					"cursor": "pointer",
					"background": "green"
				});
				document.getElementsByClassName("submit")[0].removeAttribute("disabled");
			}
	});
	
	
	
	/*���ֲ�����*/
	var play=false;
	$(".music_play").click(function(){
		if (play==true) {
			$(this).css({"background-image":"url(img/stopmusic.png)"});
			document.getElementById('myplayer').pause();
			play=false;
		} else{
			$(this).css({	"background-image":"url(img/playmusic.png)"	});
			document.getElementById('myplayer').play();
			play=true;
		}
	})
	
	$(".scrolltext").hide();	//��������
	$(".music_play").hover(function(){
		$(this).css("opacity","0.8");
		$(".scrolltext").fadeIn(500);
	},function(){
		$(this).css("opacity","0.2");
		$(".scrolltext").fadeOut(500);
	})
	
	
	
	var li = $('.change li');

    li.hover(function() {
//      $(this).css("background","#473373");
      $(this).children().css("color","#27a1f6");
    }, function() {
//      $(this).css("background","#fff");
      $(this).children().css("color","#777777");
    });

	

})



	/*������ӵĿؼ�*/
   				
				//��������أ���ʼ����ҳ�ؼ���ʽ
				var xgsf_prev=document.getElementsByClassName("prev")[0];	
				var xgsf_next=document.getElementsByClassName("next")[0];
				var xgsf_currentPage=document.getElementsByClassName("currentPage")[0];
				var currPagHtml=xgsf_currentPage.innerHTML;
				var xgsf_allPage=document.getElementsByClassName("allPage")[0];
				var tabcm=document.getElementsByClassName("tabC")[0];
				tabcm.style.marginTop="0px";
				xgsf_prev.style.backgroundImage="url(img/armL1.png)";
				xgsf_prev.style.backgroundSize="90%";
				xgsf_currentPage.innerHTML="1"; 
				xgsf_prev.disabled=true;  
				xgsf_next.style.backgroundImage="url(img/armR1.png)";
				
			
			//�л����¼�
			function tag(obj) {
				var xgsf_prev=document.getElementsByClassName("prev")[0];	
				var xgsf_next=document.getElementsByClassName("next")[0];
				var xgsf_currentPage=document.getElementsByClassName("currentPage")[0];
				var currPagHtml=xgsf_currentPage.innerHTML;
				var xgsf_allPage=document.getElementsByClassName("allPage")[0];
				var tabcm=document.getElementsByClassName("tabC")[0];
				var list_li = document.getElementsByClassName("ul_for_border")[0].getElementsByTagName("li");
				var list_div = document.getElementsByClassName("change");

				for(var i = 0; i < list_li.length; i++) {
					list_li[i].className = "";
					list_div[i].className = "change";
					list_li[i].index = i;
					tabcm.style.marginTop="0px";
					xgsf_prev.style.backgroundSize="90%";
					xgsf_currentPage.innerHTML="1";
					xgsf_prev.disabled=true; 
					xgsf_next.style.backgroundSize="100%";
				}
				var div_index = obj.index;
				obj.className = "getli";
				list_div[div_index].className = "change activity";
				
				
			}
			

			//�¸��׷���һҳ�¼�
			function pre(obj){
				var xgsf_prev=document.getElementsByClassName("prev")[0];	
				var xgsf_next=document.getElementsByClassName("next")[0];
				var xgsf_currentPage=document.getElementsByClassName("currentPage")[0];
				var currPagHtml=xgsf_currentPage.innerHTML;
				var xgsf_allPage=document.getElementsByClassName("allPage")[0];
				var tabcm=document.getElementsByClassName("tabC")[0];
				
				if(currPagHtml=="1"){
					
				}else if(currPagHtml=="2"){ 
					tabcm.style.marginTop="0px";
					xgsf_prev.style.backgroundSize="90%";					
					xgsf_currentPage.innerHTML="1";
					xgsf_prev.disabled=true; 
				}else if(currPagHtml=="3"){
					tabcm.style.marginTop="-280px";
					xgsf_next.removeAttribute("disabled");
					xgsf_next.style.backgroundSize="100%";					
					xgsf_currentPage.innerHTML="2";
				}
			}
			//�¸��׷���һҳ�¼�
			function next(obj){
				var xgsf_prev=document.getElementsByClassName("prev")[0];	
				var xgsf_next=document.getElementsByClassName("next")[0];
				var xgsf_currentPage=document.getElementsByClassName("currentPage")[0];
				var currPagHtml=xgsf_currentPage.innerHTML;
				var xgsf_allPage=document.getElementsByClassName("allPage")[0];
				var tabcm=document.getElementsByClassName("tabC")[0];
				
				if(currPagHtml=="1"){
					tabcm.style.marginTop="-280px";
					xgsf_prev.removeAttribute("disabled");
					xgsf_prev.style.backgroundSize="100%";
					xgsf_currentPage.innerHTML="2";
				}else if(currPagHtml=="2"){
					tabcm.style.marginTop="-560px";
					xgsf_next.style.backgroundSize="90%";
					xgsf_currentPage.innerHTML="3";
					xgsf_next.disabled=true;
				}else if(currPagHtml=="3"){

				}
			}