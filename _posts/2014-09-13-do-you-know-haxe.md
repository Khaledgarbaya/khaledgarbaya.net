---
layout: post
title: Do you know Haxe ?
author: Khaled Garbaya
---

Since Haxe first came in 2006 there was a lot of changes involving Language features, platform support and so on . In this article we will try to cover all aspect and changes of haxe to give you fresh look about the technology and I follow up article I will be writing about getting started with haxe.

## Do you know Haxe ?

Versions  | Release Date | Major Features
--- | --- | ---
Haxe 1(r1)| August 2006  | adding the Flash AVM2 target along with the haxelib-tool
Haxe 1(r2)| March 2007   |  Adding Actionscript 3 target and minor bug fixes
Haxe 2.0  | July 2008    |  Adding PHP target courtesy of Franco Ponticelli
Haxe 2.04 | July 2009    |  Adding C++ target thanks to Hugh Sanderson
Haxe 2.07 | January 2011 |  Adding Support for macros
Haxe 2.08 | 2011         |  improvements for the javascript target
Haxe 2.09 | 2011         |  improvements for the javascript target
Haxe 2.10 | July 2012    |  Adding Java and C# Target and preparation for Haxe 3
Haxe 3    | May 2013     |  Haxe 3 released Under the newly established Haxe Foundation

## Compiler

The compiler is written in OCaml. It can be run in server-mode to provide code completion for IDEs and maintain a cache, to speed up compilation even more.I have been working with haxe since a while now, in the begging when I compile a haxe project I sometime have this question in head "Is it even doing something the compiler?". The Haxe compiler is so crazy fast That you can't even notice it is compiling, you tell it to generate/run for a specific platform and "baam!" you are ready.

The Haxe compiler is separated into one frontend and multiple backends. The frontend is responsible for parsing and type-checking the input language, applying macros, general optimizations, various transformations, and for producing the intermediate representation of the code, the typed abstract syntax tree (AST). Each of the backends is responsible for translating that AST into either sourcecode or bytecode for the respective target.

But what about Performance ?

It depends on the target Performance in case of Actionscript for instance with Haxe you can get better performance than a version compiled with Adobe flex SDK.Also for IOS we've been running some performance test since Haxe is targetting this platform through C++ we got stunning results with 130% more performance using haxe

## Platforms Support

Code Generator| Platform|Usage
--------------|---------|--
Actionscript 3|Adobe Flash Player 9+/Adobe AIR|Web/Mobile/Desktop
Javascript    |HTML5| Browser/Desktop/Mobile
C++(haxcpp)   |Apple IOS and Android| Mobile
PHP           |PHP| Server
Phython       |Python| Server/browser
Java          |Java|Server/Desktop
C#            |.NET Framework| Server/Desktop/Mobile
Neko          |NekoVM| Server/Desktop

## Well known libraries/Utils/engines on top of haxe

[OpenFL](http://www.openfl.org/) is an opensource implimentation of the Flash API On top of Haxe and make it easy for expecially former actionscript developer to use more powerfull and more performant language to target pretty much all mainstream platform in mobile, desktop and web.

[lime](https://github.com/openfl/lime) is a Lime is a flexible, lightweight layer for Haxe cross-platform developers.Lime supports native, Flash and HTML5 targets with unified support for Windowing, Input, Events,Audio,Render contexts,Network access and Assets which is actually Used by OpenFL

[tink_macro](https://github.com/haxetink/tink_macro) is a super powerfull macro toolkit to add some sugar to the haxe language I really encourage you to check it out if you want to know more about the macros feature in haxe.

[Haxepunk](http://haxepunk.com/) is an opensource framework built on top of openfl ported from Flashpunk which let you build your game and target any platform.

[HaxeFlixel](http://haxeflixel.com/) is an open source 2D game library written in the Haxe Language and powered by OpenFL.

And the list goes on please let me know If I missed an important library/engine/utils on top of Haxe and I will update the article accordingly

## What's next ?

I am working on more article about haxe which involving getting a teaste of it , getting more technical and deep dive in some topics. Mean while check out the haxe website [here](http://haxe.org/).Make sure to install it and play around with it.
