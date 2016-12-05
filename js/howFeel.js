require(['../scss/howFeel.scss','./main.js']);
var $=require('jquery');
$(".box dl").on("click","span",function(){

  
 		$(this).addClass("active").siblings().removeClass("active");
 		//$(this).parents("ol").siblings("a").attr("data-into","true");
 	



  

})




$('.btn').on("click",function(){
	location.href="status.html";
})
