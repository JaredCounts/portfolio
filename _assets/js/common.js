$(document).ready(function() {
	// Turn on anything with the "yesscript" class
	$('.yesscript').css('display', 'inline');

	// Style the sidebar so the "current page" is bold.
	$("#sidebar a").each(function(){
		// If the current URL matches the linked URL, then bold the link.
		if (this.href == window.location) {
			$(this).parent().addClass("current");
		}
	});

	// When the user scrolls "past" the sidebar, I'd like to have the sidebar
	// follow along.
	var sidebar = $('#sidebar');
    $(window).scroll(function(e) {
		if (($(window).height() > sidebar.height()) && ($('body').scrollTop() > 80)) {
			sidebar.addClass("fix-sidebar");
		} 
		else if (($(window).height() <= sidebar.height()) && ($('body').scrollTop() > 130 + sidebar.height() - $(window).height())) {
			sidebar.addClass("fix-sidebar-bottom");
		}
		else {
			sidebar.removeClass("fix-sidebar");
			sidebar.removeClass("fix-sidebar-bottom");
		}
	});
});