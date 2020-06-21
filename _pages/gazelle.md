---
layout: page
title:  "Gazelle"
date:   2020-06-14 13:04:22 -0700
thumbnail: "gazelle-thumb.png"
subtitle: "2D physics engine"
custom_js: gfy
custom_css: gfy
rorder: 6
---
{% capture video %}
    {% assign videos = "MadeupRealisticAfricanpiedkingfisher,JointShockedGemsbuck,SpanishGiddyAntbear,TemptingGrayEquine,HorribleOrnateHuia" | split: "," %}
    {% assign sizes = "giant,fat,giant,giant,fat" | split: "," %}
    {% include gfy-video.html video_names=videos video_sizes=sizes %}
{% endcapture %}
{{ video | strip_newlines | strip }}

Gazelle was my 3 month long project at the beginning of 2012 during Junior year of high school. My goal was to create a rigid body physics engine that could rival <a href="http://box2d.org/" target="_blank">Box2D</a> and <a href="https://chipmunk-physics.net/" target="_blank">Chipmunk</a>.

Gazelle can handle up to 1000 polygons in real time, and it has support for sliding friction, rolling friction, stacking, world wrapping, and soft-body dynamics.

I wrote Gazelle using Verlet integration, which I also used in <a href="../curtain">Curtain</a>, <a href="../nebula">Nebula</a>, and <a href="../ragdolls">Ragdoll Aquarium</a>.

Gazelle is <a href="https://github.com/BlueThen/Gazelle-Java-Physics-Engine" target="_blank">open sourced on GitHub!</a>

{% capture gallery %}
    {% include gallery.html gallery_id="gazelle" %}
{% endcapture %}
{{ gallery | strip_newlines | strip }}