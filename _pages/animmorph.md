---
layout: page
title:  "AnimMorph"
date:   2020-06-14 13:04:22 -0700
thumbnail: "animmorph-thumb.png"
subtitle: "Mesh interpolation"
custom_css: [fitvid, lightbox]
custom_js: [fitvid, lightbox]
rorder: 14
---

{% include youtube-video.html video_id="pGdo7IQf_uU" %}

AnimMorph was my project for <a href=http://people.csail.mit.edu/jsolomon/ target=_blank>Justin Solomon</a>'s MIT class, Shape Analysis (6.838). For this project, I implemented Chen, Weber, Keren, and Ben-Chen's paper, "Planar Shape Interpolation with Bounded Distortion."

In extension to the paper, I present a way to interpolate between meshes using any generic interpolation or spline based function, such as cubic splines or bezier. Below is an example of a bar mesh being interpolated between three keyframes (red, green, and blue). The top sequence shows the interpolation using Chen, et. al's method, and the bottom shows my method based on cubic interpolation.

{% asset animmorph/linear-vs-cubic.png %}

I also show how bezier interpolation may be used to tune the motion of the mesh, shown in the below image. Each row shows a different interpolation with a different control point, modified by a single parameter angle.

{% asset animmorph/bezier-angleA.png %}
In general the interpolation seems to work quickly. A single interpolation of this bar mesh on my Surface Pro 3 takes about 2 milliseconds, faster than needed for a real time application.

The source is <a href=https://github.com/JaredCounts/AnimMorph target=_blank>available on GitHub.</a> Special thanks to Justin Solomon for helping me understand the contents of the paper!

{% capture gallery %}
    {% include gallery.html gallery_id="animmorph" %}
{% endcapture %}
{{ gallery | strip_newlines | strip }}