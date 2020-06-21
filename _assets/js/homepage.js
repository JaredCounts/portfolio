//<![CDATA[ 

// Wait for the page to load so we have the elements we need to query loaded.
$(window).on("load", function(){

// When hovering over a link in the contents, highlight the corresponding link in the sidebar.
$("#content a").hover(function(){
        $('#sidebar a[href="' + $(this).attr("href") + '"]').addClass('highlight');
        $('#content a[href="' + $(this).attr("href") + '"]').addClass('highlight');
	},
	function(){ // unhover
        $('#sidebar a[href="' + $(this).attr("href") + '"]').removeClass('highlight');
        $('#content a[href="' + $(this).attr("href") + '"]').removeClass('highlight');
	});

// Same as above but with the sidebar instead of the contents.
$("#sidebar a").hover(function(){
        $('#sidebar a[href="' + $(this).attr("href") + '"]').addClass('highlight');
        $('#content a[href="' + $(this).attr("href") + '"]').addClass('highlight');
	},
	function(){ // unhover
        $('#sidebar a[href="' + $(this).attr("href") + '"]').removeClass('highlight');
        $('#content a[href="' + $(this).attr("href") + '"]').removeClass('highlight');
	});

});

