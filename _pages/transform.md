---
layout: page
title:  "TRANSFORM"
date:   2014-06-14 13:04:22 -0700
thumbnail: "transform-thumb.png"
subtitle: "Tangible display"
custom_css: [fitvid, lightbox]
custom_js: [fitvid, lightbox]
rorder: 9
---

{% include vimeo-video.html video_id=98880732 %}

<a href="http://tangible.media.mit.edu/project/transform/">TRANSFORM</a> aims to inspire viewers with unexpected transformations, as well as the aesthetics of the complex machine in motion.

The work is comprised of three dynamic shape displays that move more than one thousand pins up and down in realtime to transform the tabletop into a dynamic tangible display. The kinetic energy of the viewers, captured by a sensor, drives the wave motion represented by the dynamic pins.

TRANSFORM tells the story of the conflict between nature and machine, and its reconciliation, through the ever-changing tabletop landscape.

TRANSFORM is the brainchild of Daniel Leithinger and Sean Follmer under Hiroshi Ishii at MIT Media Lab's Tangible Media Group.

My job was to develop new concepts and applications for the TRANSFORM. As a result, I programmed interactive waves and artificial intelligence for a simulated school of fish.

I also helped program the foundation and the final codebase for TRANSFORM.

TRANSFORM's applications were programmed in C++ with OpenFrameworks. We used Xbox Kinect as a primary sensor.

TRANSFORM was first exhibited in LEXUS DESIGN AMAZING 2014 MILAN in April 2014.

I flew with Tangible Media Group to Milan, Italy to help set up the exhibit and troubleshoot potential last-minute bugs.

<a href="http://tangible.media.mit.edu/project/transform/">TRANSFORM Homepage</a> at Tangible Media Group

{% capture gallery %}
    {% include gallery.html gallery_id="transform" %}
{% endcapture %}
{{ gallery | strip_newlines | strip }}