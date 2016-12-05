require(['../scss/status.scss','./main.js']);
var $=require('jquery');
	$('.title1').on('click',function(){
		$('.describe').toggle();
	})

	$('.items span').on('click',function(){
		$('.ccc').toggle();
	})