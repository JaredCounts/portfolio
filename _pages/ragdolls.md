---
layout: page
title:  "Ragdoll Aquarium"
date:   2020-06-14 13:04:22 -0700
thumbnail: "ragdolls-thumb.png"
subtitle: "Fast ragdoll mechanics"
custom_js: [gfy, lightbox]
custom_css: [gfy, lightbox]
rorder: 3
---
{% capture video %}
    {% assign videos = "ClosedAncientHoatzin,EverlastingJovialDrongo,SprySeriousCowrie" | split: "," %}
    {% assign sizes = "giant,giant,giant" | split: "," %}
    {% include gfy-video.html video_names=videos video_sizes=sizes %}
{% endcapture %}
{{ video | strip_newlines | strip }}

Ragdoll Aquarium was an experiment in realistic character physics.

The applet can handle up to 300 simultaneous ragdolls at 60 fps on my laptop.

The same algorithms from <a href="../curtain" target="_blank">Curtain</a> are used for the physics in Ragdoll Aquarium. Thomas Jakobsen, the person who introduced the algorithm to game development in the game Hitman, originally used it for realistic character physics.

You can view the source and try the applet <a href="http://www.openprocessing.org/sketch/22598" target="_blank">at OpenProcessing</a>. Java is needed to run it.

{% capture gallery %}
    {% include gallery.html gallery_id="ragdolls" %}
{% endcapture %}
{{ gallery | strip_newlines | strip }}