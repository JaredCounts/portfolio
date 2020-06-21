---
layout: page
title:  "OpenFold"
date:   2020-06-14 13:04:22 -0700
thumbnail: "openfold-thumb.png"
subtitle: "Future furniture"
custom_css: [lightbox]
custom_js: [lightbox]
rorder: 12
---

{% asset openfold/pug-assembled.png %}

Furniture is expensive, bulky, and difficult to manufacture. We took inspiration from various methods in order to innovate the way furniture is designed.

Our primary goal is to design a process that can automatically generate furniture that can be made from a single sheet of material, assembled without screws, and folded flat for transportation and storage.

This was a class project in collaboration with <a href="https://www.linkedin.com/in/anne-kim-b193667a" target="_blank">Anne Kim</a> and <a href="http://www.hunminkoh.com/home" target="_blank">Hunmin Koh</a> in <a href="http://people.csail.mit.edu/wojciech/" target="_blank">Wojciech Matusik</a>'s class, 6.807 Computational Fabrication

Our work takes inspiration from the design of <a href="http://www.lovepopcards.com/" target="_blank">Lovepop Cards</a> and flexure furniture. The idea is to scale the the concept of interlocking sliceform design up to furniture sized, plus adding flexures between the interlocks in order to give the otherwise stiff material just enough flexibility for it to fold flat.

I wrote an algorithm which will automatically take a 3D file and generate the cuts necessary for a cnc mill or laser cutter. The slots for interlocking are conveniently labeled.

Our implementation was written in Python, and can be viewed online on <a href="https://github.com/JaredCounts/OpenFold" target="_blank">GitHub</a>.

{% capture gallery %}
    {% include gallery.html gallery_id="openfold" %}
{% endcapture %}
{{ gallery | strip_newlines | strip }}