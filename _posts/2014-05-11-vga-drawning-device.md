---
layout: post
title: VGA Drawing Device
---

![](https://lh4.googleusercontent.com/-5-JKeZqW8Sc/U28gN3epnBI/AAAAAAAAA9s/S4tpb7a2rp8/w550/photo+3.JPG)

For a group assignment at uni, we used a [Spartan 3E FPGA board](http://www.xilinx.com/products/boards-and-kits/HW-SPAR3E-SK-US-G.htm) to create a drawing machine that lets you draw pixel art onto a VGA computer monitor.

<p class="image"><img src="https://lh5.googleusercontent.com/-_G0rVumK5Dk/U28kIjs1uhI/AAAAAAAAA94/OPCMqrN5IXA/w850/verilog.png" /></p>

We used verilog code modules to create the system circuitry on the FPGA for the drawing device.

<p class="image"><img src="https://lh6.googleusercontent.com/-58c7KYrfqZ4/U28klSP3NEI/AAAAAAAAA-A/mTMmE6-chG8/w850/block-diagram.png" /></p>

Above is the block diagram for our finished system. Key aspects are the state machine for the different functions, ROM for saved pictures, a frame buffer, and a VGA signal timer.