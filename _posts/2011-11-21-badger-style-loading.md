---
layout: post
title: Badger-style loading
---

I made a [Badger Badger Badger](http://www.youtube.com/watch?v=EIyixC9NsLI)-inspired pixel-art loading animation using [gifsicle](http://www.lcdf.org/gifsicle/man.html)), a GIF command-line utility.

![Frame 1](https://lh5.googleusercontent.com/-3jILoc68kxU/TskEAI83FvI/AAAAAAAAAV4/M6QR-mkUmnE/s49/3.gif) ![Frame 2](https://lh3.googleusercontent.com/-t834wrvQAkQ/TskEAP7xDlI/AAAAAAAAAV8/wn4XK5sJjWo/s49/2.gif) ![Frame 3](https://lh4.googleusercontent.com/-eFBF30ILxBw/TskEAMs2VMI/AAAAAAAAAV0/HGdzyq5Vcms/s49/1.gif)

After creating three frames (1.gif, 2.gif, 3.gif), I used the following command:

`$ gifsicle --loopcount=0 -d20 1.gif -d10 2.gif 3.gif -d7 2.gif > loading.gif`

Which results as:

![Badger loading](http://jmettes.com/images/loading.gif)
