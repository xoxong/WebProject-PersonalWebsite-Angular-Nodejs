//选择下拉框 另外的下拉框的值发生改变
$('#select_bank').change(function(){
	var index = $('#select_bank').get(0).selectedIndex;//索引
//		console.log(index);
	var qishus = $('#qishu').val();
		lixi=0;
	
	if(index==0){
		$('#qishu').empty();
		jQuery("#qishu").append("<option value='12'>12期</option>");
		jQuery("#qishu").append("<option value='24'>24期</option>");
		jQuery("#qishu").append("<option value='36'>36期</option>");
		jQuery("#qishu").append("<option value='48'>48期</option>");
		jQuery("#qishu").append("<option value='60'>60期</option>");
		
		
		if(qishus==12){
			lixi=0.79
		}else if(qishus==24){
			lixi=0.58
		}else if(qishus==36){
			lixi=0.50
		}else if(qishus==48){
			lixi=0.46
		}else if(qishus==60){
			lixi=0.43
		}else{
			return false;
		}
	}
	if(index==1){
		$('#qishu').empty();
		jQuery("#qishu").append("<option value='12'>12期</option>");
		jQuery("#qishu").append("<option value='24'>24期</option>");
		jQuery("#qishu").append("<option value='36'>36期</option>");
		
		if(qishus==12){
			lixi=0.83
		}else if(qishus==24){
			lixi=0.63
		}else if(qishus==36){
			lixi=0.56
		}else if(qishus==48){
			return false;
		}else if(qishus==60){
			return false;
		}else{
			return false;
		}
	}
	if(index==2){
		$('#qishu').empty();
		jQuery("#qishu").append("<option value='12'>12期</option>");
		jQuery("#qishu").append("<option value='24'>24期</option>");
		jQuery("#qishu").append("<option value='36'>36期</option>");
		jQuery("#qishu").append("<option value='60'>60期</option>");
		
		
		if(qishus==12){
			lixi=0.86
		}else if(qishus==24){
			lixi=0.65
		}else if(qishus==36){
			lixi=0.47
		}else if(qishus==48){
			return false;
		}else if(qishus==60){
			lixi=0.38
		}else{
			return false;
		}
	}
	
		$('#month_lixi').html(lixi+'%');
	
})

//第二个发生改变
$('#qishu').change(function(){
	
	var banks=$('#select_bank').get(0).selectedIndex;//索引
	var qishus = $('#qishu').val();
		lixi=0;
	if(banks==0){
//		alert("第二个中国银行")
		if(qishus==12){
			lixi=0.79
		}else if(qishus==24){
			lixi=0.58
		}else if(qishus==36){
			lixi=0.50
		}else if(qishus==48){
			lixi=0.46
		}else if(qishus==60){
			lixi=0.43
		}else{
			return false;
		}
		
	}
	if(banks==1){
//		alert("第二个建设银行")
		if(qishus==12){
			lixi=0.83
		}else if(qishus==24){
			lixi=0.63
		}else if(qishus==36){
			lixi=0.56
		}else if(qishus==48){
			return false;
		}else if(qishus==60){
			return false;
		}else{
			return false;
		}
		
	}
	if(banks==2){
//		alert("第二个工商银行")
		if(qishus==12){
			lixi=0.86
		}else if(qishus==24){
			lixi=0.65
		}else if(qishus==36){
			lixi=0.47
		}else if(qishus==48){
			return false;
		}else if(qishus==60){
			lixi=0.38
		}else{
			return false;
		}
		
	}
	$('#month_lixi').html(lixi.toFixed(2)+'%');
})

	 $("#ny_DS_dkbtn").on('click',function(){
	 	validateDKData();
	 })
//装修贷计算器	验证贷款数据
	function validateDKData() {
		
		var jine = $('#jine').val();
		var qishu = $('#qishu').val();
		
		if(jine == ''){
			
			alert('请输入贷款金额');
			return false;
			
		}else if(jine < 10000){
			
			alert('贷款金额不能低于1万');
			return false;
			
		}else if(jine > 1000000){
			
			alert('贷款金额不能超过100万');
			return false;
			
		}else{
				var bank_index= $('#select_bank').get(0).selectedIndex;
				if(bank_index==0){
//					alert("你选择了中国银行");
					if(qishu==12){
						lilv =0.80/100,//日利率
						qishu=12;
					}else if(qishu==24){
						lilv = 0.58/100,//日利率
						qishu=24;
					}else if(qishu==36){
						lilv = 0.50/100,//日利率
						qishu=36;
					}else if(qishu==48){
						lilv = 0.46/100,//日利率
						qishu=48;
					}
					else if(qishu==60){
						lilv = 0.43/100,//日利率
						qishu=60;
					}else{
						return false;
					}
				}else if(bank_index==1){
//					alert("你选择了建设银行")
					if(qishu==12){
						lilv = 0.83/100,//日利率
						qishu=12;
					}else if(qishu==24){
						lilv =0.623333/100,//日利率
						qishu=24;
					}else if(qishu==36){
						lilv = 0.552222/100,//日利率
						qishu=36;
					}else{
						return false;
					}
				}else if(bank_index==2){
//					alert("你选择了工商银行")
					if(qishu==12){
							lilv = 0.86/100,//日利率
							qishu=12;
						}else if(qishu==24){
							lilv = 0.65/100,//日利率
							qishu=24;
						}else if(qishu==36){
							lilv =0.47/100,//日利率
							qishu=36;
						}else if(qishu==60){
							lilv = 0.4133/100,//日利率
							qishu=60;
						}else{
							return false;
						}
					
				}else{
					return false;
				}
//				
//			lilv = 0.472/100,//日利率
//			qishu = $('#qishu').val(),//期数
			huankuan = 0,
			tatal = 0;

			huankuan = jine/qishu+jine*lilv;
			tatal = huankuan*qishu;
			$('#dkJine').html(jine);
 			$('#dkZhouqi').html(qishu);
   			$('#huankuan').html(Math.round(huankuan));
//			$('#huankuan').html(huankuan);
 			$('#hkTotal').html(tatal.toFixed(2));
			
		}
		
	}