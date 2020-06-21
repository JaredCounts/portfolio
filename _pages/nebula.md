---
layout: page
title:  "Nebula"
date:   2020-06-14 13:04:22 -0700
thumbnail: "nebula-thumb.png"
subtitle: "Generative art"
custom_js: [gfy, lightbox]
custom_css: [gfy, lightbox]
rorder: 4
---
{% capture video %}
    {% assign videos = "FaroffFelineHorsefly" | split: "," %}
    {% assign sizes = "fat" | split: "," %}
    {% include gfy-video.html video_names=videos video_sizes=sizes %}
{% endcapture %}
{{ video | strip_newlines | strip }}


Nebula is a program I wrote that randomly generates nebula-like procedural art. It's one of my most favorite projects to return to and tinker with.

I first started the project over the summer after my sophomore year of highschool. It was originally inspired by <a href="http://www.openprocessing.org/sketch/2615" target="_blank">Mitchell Whitelaw's beautiful "scrunch / flower generator" on OpenProcessing</a>.

Nebula uses the same mechanics as <a href="/curtain" target="_blank">Curtain</a>, except in 3D. It starts off with a randomly generated sheet of point masses, with each given a randomly directed force.

Over time, the point masses move along curves as this sheet swoops around. Each rendering is drawn with a low opacity contributing to the depthness of the structure.

You can try out Nebula, and see its source code, at <a href="http://www.openprocessing.org/sketch/30891" target="_blank">OpenProcessing</a>.

{% capture gallery %}
    {% include gallery.html gallery_id="nebula" %}
{% endcapture %}
{{ gallery | strip_newlines | strip }}