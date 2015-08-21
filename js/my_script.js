$(document).ready(function() {

	var menuWrap = $('.header .header-wrap'), menuWrapHeight = $('.header .header-wrap').height(), isMenuOpened = true, _window = $(window);

	$('header .nav-button').on('click', function(){
		menuWrapHeight = $('.header .header-wrap').height();

		if(!isMenuOpened){
			isMenuOpened = true;
			menuWrap.removeClass('opened').find(".sf-menu").slideUp();
		}else{
			isMenuOpened = false;
			menuWrap.addClass('opened').find(".sf-menu").slideDown();
		}
	})	

	$('.st-date, .end-date').each(function(index) {
        //get the first word
        var firstWord = $(this).text().split(' ')[0];

        //wrap it with span
        var replaceWord = "<small>" + firstWord + "</small>";

        //create new string with span included
        var newString = $(this).html().replace(firstWord, replaceWord);

        //apply to the divs
        $(this).html(newString);
    });

})