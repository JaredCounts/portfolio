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

Click and drag to interact.

[Click here for a full-screen demo.](demo.html)

[The full source can be found on Github.](https://github.com/JaredCounts/CircusFluid)

Circus fluid was originally a Processing app I wrote back in 2011. The idea was to turn a simple wave simulation algorithm into something more artsy/colorful.

If I recall correctly, I borrowed from the pseudocode in [Matthias Mueller-Fischer's "Fast Wave Simulation for Games Using Height Fields" GDC presentation from 2008](http://twvideo01.ubm-us.net/o1/vault/gdc08/slides/S6509i1.pdf). The original source of my implementation had a syntax bug in the update logic that still ended up giving pretty good results. It's fixed in my re-implementation, but the behavior is a bit different now.

Here is the basic idea behind the wave equations. Pretend the brightness of each pixel is the height of a column of water. For a pixel and its adjacent neighbor, use Hooke's law to compute the spring force pulling that pixel towards its neighbor's height. That's pretty much it. In my app, that force is used to update the velocity, which is then integrated into the height (or "density") of the pixel.

{% capture gallery %}
    {% include gallery.html gallery_id="circus" %}
{% endcapture %}
{{ gallery | strip_newlines | strip }}