---
layout: post
title: Duell tool and Environment Explained
author: Khaled Garbaya
---

The Duell Tool is a command line tool for setting up, building and running applications on any platform. It can also be used for other general tasks within app development. It is made in a modular way via plugins, and each plugin is separate from the tool itself. The tool merges the needed plugin on execution.

The execution of the tool is always “duell” followed by a command such as “build” or “setup” and then a plugin name like “ios” or “emptyProject”. For example, “duell build ios” will run the command “build” with the “ios” plugin. You can also pass additional parameters to execution by prefixing with “-“, e.g. “duell build ios -verbose”.

## Duell tool architecture

We have 3 types of plugins that the tool can have:

* create plugins for sample projects
* setup plugins for setting up an environment, or anything that is one time thing.
* the build plugins.

The build plugins are of course the most important thing. So let’s talk about those.

## Duell Environment

The important part here is the environment. That is what we think is the real value of what we’re sharing. The libraries are examples of how libraries can be implemented in this environment, and to show their independence and modularity.

If you don’t like one of the libraries, you are absolutely free to not use it, but you can reuse the others as they are completely independent.

For multiple engines, we can very easily cooperate and share modules between them.

For example, if we make a SDL library, we pretty much replace Input and OpenGL, but we can still use the other libraries.

We still share the other libraries they don’t depend at all on input or opengl. In the filesystem, if libraries are developed that only depend on the filesystem, they can be shared with both engines.

An example of this is an atlas generation library, or a webp encoding library.

This is what we believe can be achieved by doing things in a modular way.

## Why the duell tool and what does it offer?

We made the tool for a handful of reasons:

1. in haxe when you have local haxlib (Made by game developer) whenever there is a new release or patch developers need to update manually but the tool is doing it automatically, for example : when you run duell update the tool will go through all the libs you specified and check the version and install/update them (both haxe and duell libs) automatically. This way you can switch between projects and setups easily.
2. with duell tools comes duell libraries, our libraries support backends, meaning you have one developer with ios exerience working on the ios side of things and having one as3 developer working on the flash backend in parallel in the same library without breaking each other's code , they just need to agree on an API and write a simple extern to define that.

3. With the backends also we'll have game logic written 100% in haxe no #if something #end
4. Creating Native Extension and link it with haxe code is easy to do using the tool

5. Duell Library supports plugin system, for example if you have a library that require assets to be copied or somthing to be added to plist etc... you can write a plugin inside the library that can be executed in the build time to the work, this way you have a library responsible of itself and does not require extra setup from game developer

6. the tool is able to build ndll and merge them in the final build which is missing in the mainstream building tool

7. We need an Enterprise level tool which is modular, clean and easier to maintain

8. Based on the plugin system it is easier to add a new build plugin for another target.

9. the tool also is setting up the environment for you you don't have to install anything manually except for haxe.

10. Duell libraries are very powerful, you can make a library do stuff at build time like packing atlases, copying assets, upload a binary somewhere etc... the library can be responsible of its own setup .

## How does it work ?

Here we have the general flow the happens when you build, and which components actual work on it.

Starting from below, and considering an example command, like duell build ios, we have the duell tool, our command line applications

Then the dependencies of the project are parsed, and we update their versions using git. Our versions are git tags, we have a system similar to cocoa pods to the people that have worked with it, where we can specify for example version 1.0.0+ and then any version that comes out above 1.0.0+ is automatically downloaded up to 2.0.0 which is supposed to be a breaking change. This is a rather complex topic so we’ll leave it at that for now.

Then comes the selection of the plugin, in this case iOS ofc.

And then we parse the configuration. The configuration looks very much like any build configuration file you are used to, but what is different is the way that is parsed.
As you can see here, it’s not only the duell tool that parses the configuration. The plugin parses its own specific part, and very importantly, the libraries can also have specific configurations which are parsed there completely independently.

From this xml configuration, we build a data model that allows us to actually build for the target platform.

In the building part, the duell tool actually doesn’t do anything anymore, it’s all about the build plugin, and the libraries.

## What we open sourced ?

We at Gameduell are happy to announce that we open sourced some of our work to the community. Go to https://github.com/gameduell
you can find all, the tool, the libraries and the plugins.

## Getting Started

### Install Duell

In your command line run `$ haxelib install duell`

### Setup Duell

to setup duell run this `$ haxelib run duell self_setup`

### Testing

```
$ mkdir emptyProject

$ cd emptyProject

$ duell create emptyProject

$ duell build html5
```

## Duell tool is buit on top of Haxe

[Haxe](http://haxe.org) is an open source toolkit based on a modern, high level, strictly typed programming language, a cross-compiler, a complete cross-platform standard library and ways to access each platform's native capabilities.
