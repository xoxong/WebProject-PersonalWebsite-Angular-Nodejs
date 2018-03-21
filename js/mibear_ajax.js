$(function(){
	
	function JQAjaxFn(url,type,obj,datatype){
		//友情链接ajax
		$.ajax({
			url:"",
			type:"post",
			data:{id:"0",name:"5"},
			dataType:"json",
			success:function(data,textStatus){
				alert(data);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert("提交失败")
	            console.log(XMLHttpRequest.status);
	            console.log(XMLHttpRequest.readyState);
	            console.log(XMLHttpRequest.status);
	        },
	        complete: function(XMLHttpRequest, textStatus) {
	        }
		})
	}
	
})
