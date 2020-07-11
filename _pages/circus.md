---
layout: page
title:  "Circus Fluid"
date:   2020-06-14 13:04:22 -0700
thumbnail: "circus-thumb.png"
subtitle: "Colorful wave toy"
custom_js: [gfy, lightbox, circus]
custom_css: [gfy, lightbox, app]
rorder: 2
---
<div id="app"></div>
<!-- {% capture video %}
    {% assign videos = "AcceptableDeliciousBlueandgoldmackaw,RipeDarlingHarvestmouse,CourteousMixedGerbil" | split: "," %}
    {% assign sizes = "giant,giant,giant" | split: "," %}
    {% include gfy-video.html video_names=videos video_sizes=sizes %}
{% endcapture %}
{{ video | strip_newlines | strip }} -->

I built Circus Fluid in the summer of 2011. At its core, it's a 2D wave simulator. 

Circus fluid works by having a 2D grid of springs that each represents the depth of any given pixel. Each spring pulls and pushes with those adjacent to itself.
So when a force is applied to any given pixel, the force propagates outward to other springs during each timestep.

The coloring of each pixel is somewhat arbitrary. The height determines the brightness, and the hue is the "velocity" of each spring feeding into a sine function.

If you have Java installed, you can view and play with the <a href="http://www.openprocessing.org/sketch/29833" target="_blank">Circus Fluid applet at OpenProcessing</a>.

Otherwise, you can also view the <a href="http://www.openprocessing.org/sketch/29833" target="_blank">Circus Fluid's source code at the same website</a>.

{% capture gallery %}
    {% include gallery.html gallery_id="circus" %}
{% endcapture %}
{{ gallery | strip_newlines | strip }}