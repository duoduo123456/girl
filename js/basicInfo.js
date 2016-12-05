require(['../scss/basicInfo.scss','./main.js']);
var $=require('jquery');
$('.content ul').on('click','li',function(){
if($(this).find('i').hasClass("active")){

	$(this).find('i').removeClass("active")
	}else{
	     
	     $(this).find('i').addClass('active')	

	}
});
$('.btn').on('click',function(){
 $('.mask').show();
})

$('.test_btn').on('click',function(){
    location.href='howFeel.html'
})

