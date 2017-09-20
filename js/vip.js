$(function(){
	/*header*/
	$(".appdw").eq(0).hover(
	  function () {
	    $('.appdw>a>span').eq(0).removeClass("dp-n");
	    $('.appdw>div').eq(0).removeClass("dp-n");
	  },
	  function () {
	    $('.appdw>a>span').eq(0).addClass("dp-n");
	    $('.appdw>div').eq(0).addClass("dp-n");
	  }
	);
	$(".shoppingcar").eq(0).hover(
		function(){
			$('.sc_con').eq(0).css("display",'block');
		},
		function(){
			$('.sc_con').eq(0).css("display",'none');
		}
	);
})