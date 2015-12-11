$(document).ready(function(){
	$(window).scroll(function(){
		$('#links li').each(function(i,v){
			if($(window).scrollTop() > $('#' + $(v).attr('data-section')).offset().top - 120){				
				$('#indicator').css({left: $(v).offset().left + 'px',width:  $(v).width() + 20 +  'px'});
				setActive($(v));
			}
		});
	});	
	function clearActiveLink(){$('#links').find('li').each(function(i,v){
		$(v).removeClass('active');
	});	}
	function setActive(whichElement){	if(!$(whichElement).hasClass('active')){
			clearActiveLink();
			$(whichElement).addClass('active');	
		}	}
	$('#links li').click(function(){var top = $('#' + $(this).attr('data-section')).offset().top +  -($('nav').height() + 10);
		$('html,body').animate({
			scrollTop: top
		},300);});
}); 