---
layout: page
title:  "inFORM"
date:   2020-06-14 13:04:22 -0700
thumbnail: "inform-thumb.png"
subtitle: "Cooper Hewitt 2015"
custom_css: [fitvid, lightbox]
custom_js: [fitvid, lightbox]
rorder: 10
---

{% include vimeo-video.html video_id=118300263 %}

During the fall semester of my sophomore year at MIT, Tangible Media Group built a custom version of the <a href="http://tangible.media.mit.edu/project/inform/" target="_blank">inFORM</a> for an exhibit at Cooper Hewitt, Smithsonian Design Museum. It will be on display from December 12th, 2014 until May 25th, 2015.

I rewrote the back-end software for the application side of the inFORM. With help from <a href="http://basheertome.com/" target="_blank">Basheer Tome</a>, <a href="http://ken-nakagaki.com/" target="_blank">Ken Nakagaki</a>, and <a href="http://www.bimster.com/" target="_blank">Philipp Schoessler</a>, we built an intuitive touch screen UI which allows remote interaction with the table. An Xbox Kinect is mounted above the touchscreen for in-air interaction.

There are four interaction modes. Telepresence is a one to one mapping of the users hands onto the table, letting them remotely pick up the ball and push it around. Wave is an "water-tub" simulation on the inFORM, which can interacted with. Cityscape displays data on the table which can by physically explored. Lastly, Math will display 3D surface equations.

<a href="http://tangible.media.mit.edu/project/inform-at-cooper-hewitt/" target="_blank">inFORM's page on Tangible Media Group</a>.

{% capture gallery %}
    {% include gallery.html gallery_id="inform" %}
{% endcapture %}
{{ gallery | strip_newlines | strip }}