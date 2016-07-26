$(document).ready(function () {
	$("#theMain").hide()
});

$(document).ready(function () {
	
	$("#enterbutton").click(function () {
		$("#theIntro").fadeOut("slow");
		$("#theMain").show();
	});
});

function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2;
    $dialog.css('margin-top', offset);
}

$('.modal').on('show.bs.modal', centerModal);
$(window).on("resize", function () {
    $('.modal:visible').each(centerModal);
});

$(window).scroll(function() {
	$('nav').fadeTo('slow', 0.4);
});

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top_work = $('#anchor').offset().top;
    var scrollBottom = $(window).scrollTop() + $(window).height();
	var enddiv_work = $('#anchor2').offset().top;
	    
    if ((window_top >= div_top_work) && (scrollBottom < enddiv_work)) {
    	$('#work-header').addClass('stick');
     
    } else {
        $('#work-header').removeClass('stick');
        $('#work-header').height($('#work_content').outerHeight());
     }  

	  
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});



