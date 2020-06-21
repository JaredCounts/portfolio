---
layout: page
title:  "Curtain"
date:   2020-06-14 13:04:22 -0700
thumbnail: "curtain-thumb.png"
subtitle: "Real time fabric simulation"
custom_js: gfy
custom_css: gfy
rorder: 8
---
{% capture video %}
    {% assign videos = "PotableEvenFrillneckedlizard,NewPoisedAlbertosaurus,LoneDeadChamois" | split: "," %}
    {% assign sizes = "giant,giant,giant" | split: "," %}
    {% include gfy-video.html video_names=videos video_sizes=sizes %}
{% endcapture %}
{{ video | strip_newlines | strip }}

Curtain was my first adventure into soft body physics.

It started out as a week-long project when I was 16. Ultimately, my code was based off of Thomas Jakobsen's article, "Advanced Character Physics," which described how his character physics algorithms worked in the game Hitman.
The physics attempts to maintain inertia for every particle in the system. So, every time we move a particle from a resting position, the physics engine will see this change in position and continuously add this change every timestep. This way, all we need to do is solve the distance constraints between pairs of particles. No forces, tensions, or accelerations need to be calculated.

Curtain is currently the <a href="http://www.openprocessing.org/sketch/20140" target="_blank">most favorited app in OpenProcessing</a>, with over 400 favorites and 175,000 views.

The entire code for Curtain is annotated and commented in order to be understandable for most programmers. You can see Curtain's source (and play with the Java applet, if your browser allows) on <a href="http://www.openprocessing.org/sketch/20140" target="_blank">OpenProcessing</a>.

I also wrote a <a href="http://gamedevelopment.tutsplus.com/tutorials/simulate-tearable-cloth-and-ragdolls-with-simple-verlet-integration--gamedev-519" target="_blank">how-to article for tuts+</a>. The same algorithm can be used to quickly simulate ragdolls and other soft-body materials.

{% capture gallery %}
    {% include gallery.html gallery_id="curtain" %}
{% endcapture %}
{{ gallery | strip_newlines | strip }}