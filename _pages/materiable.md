---
layout: page
title:  "Materiable"
date:   2020-06-14 13:04:22 -0700
thumbnail: "materiable-thumb.png"
subtitle: "Emulated materials"
custom_css: [fitvid, lightbox]
custom_js: [fitvid, lightbox]
rorder: 13
---

{% include vimeo-video.html video_id=165798784 %}

[Materiable]("http://tangible.media.mit.edu/project/materiable/") is a combination of [Tangible Media Group](http://tangible.media.mit.edu/)'s shape shifting furniture and the world of computer graphics simulations.

I co-authored the paper, ["Materiable: Rendering Dynamic Material Properties in Response to Direct Physical Touch with Shape Changing Interfaces"](http://tmg-trackr.media.mit.edu/publishedmedia/Papers/598-Materiable%20Rendering%20Dynamic%20Material/Published/PDF) (2016) with [Ken Nakagaki](http://ken-nakagaki.com/), [Luke Vink](http://www.lukevink.com/), and others. For this paper, we studied the emergent interaction that arises when real time and interactive physics is simulated on the (TRANSFORM)[{{ "/transform" | relative_url }}] and the (inFORM)[{{ "../inform" | relative_url }}]).

I implemented two different simulations. The first uses the shallow water equations to emulate liquid. When a user presses on a part of the table, it reacts similarly to a bed of water. 

The second emulates springy, deformable materials. It simply uses Hooke's law for each pin independently of each other as the governing force, but then values are averaged across each other in between timesteps. This model can simulate foam or trampoline-like surfaces.

We performed a user study as well in order to further understand the potential this might have for the computer human interaction industry. There were interesting results in how users perceived the material emulation.

{% comment %} 
Commonmark keeps interpreting the below snippet as markdown due to the excess newlines. So, unfortunately, we have to do this strip_newlines hack to get it to render as expected.

I /think/ this is fixed in Jekyll 4.x (I didn't have that issue then), but I have to use Jekyll 3.x to get the jekyll-assets plugin to work. 
{% endcomment %}

{% capture gallery %}
    {% include gallery.html gallery_id="materiable" %}
{% endcapture %}
{{ gallery | strip_newlines | strip }}