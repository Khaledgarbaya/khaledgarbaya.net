---
layout: post
title: Introducing Duell tool a better build tool for haxe
author: Khaled Garbaya
---

Finally I can talk about one of the exciting projects we have been working on at Gameduell, the duell tool which was announced today at the WWX 2015 Haxe conference in Paris by my colleagues Sven Otto and Rui Campos. In this article I will try to cover every aspect of this awesome tool.

## What is the Duell Tool?

The Duell Tool is a command line tool for setting up, building and running applications on any platform. It can also be used for other general tasks within app development. It is made in a modular way via plugins, and each plugin is separate from the tool itself. The tool merges the needed plugin on execution. Duell has three main plugin types Build, Setup and Create plugins.

a more in detail article [here](http://www.khaledgarbaya.net/duell-tool-and-environment-explained/)

## Build Plugins

A build plugin is simply a separate repo responsible of building to a specific platform/target for example flash, ios , android, html5 etc... Usually the repo name will be "duellbuildtarget". When you run in the command line the following

```
$duell build [flash|ios|android|html5…any]
```

one of the things the tool will look for is a repowith the name "duellbuildtarget" in the repo list (more details later)  for example "duellbuildios" update it if it needs so and run it. This guaranties extensibility in a clean way and each plugin can be maintained and updated without affecting other parts of the tool.

The duell tool provides already 4 build plugins.

* [ios build plugin](https://github.com/gameduell/duellbuildios)
* [android build plugin](https://github.com/gameduell/duellbuildandroid)
* [flash build plugin](https://github.com/gameduell/duellbuildflash)
* [html5 build plugin](https://github.com/gameduell/duellbuildflash)

## Setup plugins

As you may know every platform you want to build to require sometimes a specific setup. Something like installing a SDK , a plugin or a build tool. Also platforms often changes so the plugin needs to be up to date and easy to maintain that's exactly what duell offers .

Here is a basic usage :

```
$ duell setup [mac|android|flash|…any] -v 2.0.0
```

The tool will look for a repo with the name "duellsetupplatform" for example "duellsetupmac" get the specified version and execute it.

The duell tool provides already 3 setup plugins.

* [ios setup plugin](https://github.com/gameduell/duellsetupios)
* [android setup plugin](https://github.com/gameduell/duellsetupandroid)
* [flash setup plugin](https://github.com/gameduell/duellsetupflash)
* [html5 setup plugin](https://github.com/gameduell/duellsetupflash)

## Create Plugins

Sometimes you have a specific setup/project that you want to save somewhere as a template and you want an easy thing to access it, duell offers a nice create plugin for that.

Here is a basic usage :

```
$ duell create [emptyProject|…any]
```

duell will fetch a repo list for a repo named "duellcreatesomething" for example "duellcreateemptyProject" pull/update it and excute, in this case the "duellcreateemptyProject" plugin will copy a temple empty project to your folder.

The duell tool provides already 3 create plugins.

* [duell create emptyProject](https://github.com/gameduell/duellcreatelibraryProject)
* [duell create unitTestProject](https://github.com/gameduell/duellcreateunitTestProject)
* [duell create libraryProject](https://github.com/gameduell/duellcreatelibraryProject)
