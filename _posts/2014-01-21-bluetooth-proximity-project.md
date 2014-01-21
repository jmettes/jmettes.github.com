---
layout: post
title: Bluetooth proximity project
---

<iframe src="//www.youtube.com/embed/H4rzc52UtUw?controls=0&amp;showinfo=0" allowfullscreen="allowfullscreen" frameborder="0" height="255" width="500"><a href='http://www.youtube.com/watch?v=H4rzc52UtUw'>Watch Bluetooth proximity project on YouTube</a></iframe>

I'm working on a project using Bluetooth to build location aware apps. The new [Bluetooth 4.0 standard](http://www.extremetech.com/computing/110759-the-future-of-advertising-omnipresent-bluetooth-4-0) is a lot more power efficient, and more importantly, allows for unpaired data advertising. This means any number of bluetooth devices could communicate to phones without first having to go through the tedious manual process of pairing.

![nRF24L01+ and ATMega368 on a breadboard](https://lh4.googleusercontent.com/-kxvLSbtNcT4/Ut3HLgwoqoI/AAAAAAAAA2A/px2FfvrzEpo/w500/bluetooth-transmitter.jpg)

I built a simple bluetooth transmitter using an [nRF24L01+](http://www.nordicsemi.com/eng/Products/2.4GHz-RF/nRF24L01P) RF transciever, and is powered by an [ATMega328P-PU](http://www.atmel.com/devices/atmega328p.aspx) chip and a battery pack.

![nRF24L01+ and ATMega328P-PU](https://lh4.googleusercontent.com/-b_Jivkkrc3U/Ut3HLEXuBjI/AAAAAAAAA18/mA-E-bAPtyk/w500/nrf24l01-atmega328.jpg)

I wrote a simple proof-of-concept program in Objective C, which listens for the Bluetooth transmitters and displays which is closest. It works by comparing the signal strength ([RSSI value](http://en.wikipedia.org/wiki/Received_signal_strength_indication)) of each device.

![Bluetooth XCode app](https://lh6.googleusercontent.com/-XydKa00Kk8U/Ut3ZWBUYPEI/AAAAAAAAA2c/xi4mz1vpIZ4/w500/bluetooth-screenshot.png)