(function () {
	angular.module('controllers',[])
	.controller('JumbotronController',function(){
		$(document).on('scroll',function(){
			console.log(100-$(document).scrollTop()*8/100);
			$(".jumbo-logo").css("zoom",100-$(document).scrollTop()*8/100+"%");
		});
	});
}());