---
layout: post
title: Concave shapes with Box2dweb
---
Here's a demo of [some code](https://github.com/jmettes/concaveShapesJS) I ported to JavaScript from ActionScript ([by Yadurajiv](http://rant.yadurajiv.com/yadurajiv/2011/01/694)).

Click and drag below to draw shapes and render them as [Box2D](http://code.google.com/p/box2dweb/) physics objects.

<iframe src="/experiments/concave-shapes/" width="400" height="410" scrolling="no">bla</iframe>

What makes this cool is the ability to draw concave polygon shapes. Box2D can't do this natively, but that's solved here by [decomposing concave shapes](http://www.flipcode.com/archives/Efficient_Polygon_Triangulation.shtml) into a mesh of triangles.
