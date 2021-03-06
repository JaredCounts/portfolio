---
layout: page
title:  "Balls"
date:   2010-06-14 13:04:22 -0700
thumbnail: "balls-thumb.png"
subtitle: "Ball pit simulator"
custom_js: [gfy, lightbox, balls]
custom_css: [gfy, lightbox, app]
rorder: 1
---
<div id="app"></div>

Click and drag to interact.

[Click here for a full-screen demo.](demo.html)

[The full source can be found on Github.](https://github.com/JaredCounts/BallPit)


This first version of "Balls" came around September, 2010. My goal was to make a ball-pit physics engine that was fast and robust.

Since then, I've iterated on the algorithm to include major improvements. The first version used a grid-based partitioning to reduce the number of checks between ball-pairs for collisions.

The following versions included changes to the timestep (from dynamic to fixed) and the integration.

The simulator can handle up to 1600 simultaneous balls in real time on my laptop.

{% capture gallery %}
    {% include gallery.html gallery_id="balls" %}
{% endcapture %}
{{ gallery | strip_newlines | strip }}