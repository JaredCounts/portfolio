---
layout: page
title:  "Dough"
date:   2020-06-14 13:04:22 -0700
thumbnail: "dough-thumb.png"
subtitle: "Soft body physics"
custom_js: [gfy, lightbox]
custom_css: [gfy, lightbox]
rorder: 5
---
{% capture video %}
    {% assign videos = "LastingMadFerret,ThisUnderstatedArthropods,ScaryForthrightIrishwaterspaniel,WickedGlossyFerret" | split: "," %}
    {% assign sizes = "giant,giant,giant,giant" | split: "," %}
    {% include gfy-video.html video_names=videos video_sizes=sizes %}
{% endcapture %}
{{ video | strip_newlines | strip }}

Dough is a particle-based physics engine which can realistically simulate soft materials like dough, foam, and liquid.

It can handle over 4000 particles, and parameters can be adjusted for emulation of different kinds of materials.
    
$$pic(renders/render (2).png)$$

I originally made Dough in the summer of 2012.
Dough uses algorithms and constraints from <a href="/balls">Balls</a> and <a href="/curtain">Curtain</a>. Curtain's integration method is used as well as Ball's collision detection in order to create temporary soft-links between particles.
    
$$pic(renders/render (3).png)$$

The data structure of Dough was revamped from Curtain's to be more cache-friendly to better handle the frequent destroying and rebuilding of links.

You can see Dough's source and try it out for yourself on <a href="http://www.openprocessing.org/sketch/65193" target="_blank">OpenProcessing</a>.

{% capture gallery %}
    {% include gallery.html gallery_id="dough" %}
{% endcapture %}
{{ gallery | strip_newlines | strip }}