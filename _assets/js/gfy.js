$(document).ready(function(){

    var videoIndex = 0;
    var started = false;
    $('video').bind('ended loadstart onload', function(event) {

        // for loadstart, only set the video on the first loadstart
        //  to avoid an infinite loop
        if (event.type == 'loadstart' && started == true)
            return;
        else
            started = true;

        var $video = $(this);
        
        // Get the next video
        videoIndex = (videoIndex + 1) % videos.length;
        videoSize = videos[videoIndex][0];
        videoID = videos[videoIndex][1];

        // Change the video source
        $video.find('#webm').attr('src', 'http://' + videoSize + '.gfycat.com/' + videoID + '.webm');
        $video.find('#mp4').attr('src', 'http://' + videoSize + '.gfycat.com/' + videoID + '.mp4');
        
        // Force the video to trigger a "load" event.
        $video.trigger("load");
    });

    $('video').bind('loadeddata', function() {
        $(".gfywrap").width($(".gfyback").width());
        $(".gfyback").height($(this).height());
    });

    $('.gfywrap').css('display', 'inline-block');
});
$(window).resize(function() {
    /* Use gfyback's width, so tuning the content's padding/margins won't mess up the video */
    $(".gfywrap").width($(".gfyback").width());
    $(".gfyback").height($('video').height());
});
