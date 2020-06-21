---
layout: page
title:  "Flower Gen"
date:   2020-06-14 13:04:22 -0700
thumbnail: "flower-thumb.png"
subtitle: "Loofah generator"
custom_js: gfy
custom_css: gfy
rorder: 11
---
{% capture video %}
    {% assign videos = "LeafyLimitedDouglasfirbarkbeetle" | split: "," %}
    {% assign sizes = "zippy" | split: "," %}
    {% include gfy-video.html video_names=videos video_sizes=sizes %}
{% endcapture %}
{{ video | strip_newlines | strip }}

Flower Generator was my final project for Computer Graphics. It was based off of <a href="http://n-e-r-v-o-u-s.com/blog/?p=6721" target="_blank">Nervous System's Floraform</a>.

It works by starting with several concentric rings of point masses connected by springs. The outer most rings expand faster than the inner most rings, causing the ruffling shapes. When the rings get too large, they are subdivided into more points and more rings.

Sphere to sphere collision detection is used to prevent self intersection. Each vertex contains its own sphere, and collisions are prevented from other spheres on distant parts of the surface.

{% capture gallery %}
    {% include gallery.html gallery_id="flower" %}
{% endcapture %}
{{ gallery | strip_newlines | strip }}