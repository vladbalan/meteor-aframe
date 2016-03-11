A-Frame for Meteor
===========================

Add WebVR goodness to your Meteor app with A-Frame and Blaze.

## Hello World!

1. Add the package to your app: `meteor add vladbalan:aframe`

2. Create a template and add your scene

```handlebars
<template name="helloWorld">
  {{#aScene}}

    {{#aSphere position="0 1.25 -1" radius="1.25" color="#EF2D5E"}}{{/aSphere}}
    {{#aCube position="-1 0.5 1" rotation="0 45 0" width="1" height="1" depth="1" color="#4CC3D9"}}{{/aCube}}
    {{#aCylinder position="1 0.75 1" radius="0.5" height="1.5" color="#FFC65D"}}{{/aCylinder}}
    {{#aPlane rotation="-90 0 0" width="4" height="4" color="#7BC8A4"}}{{/aPlane}}

    {{#aSky color="#ECECEC"}}{{/aSky}}

  {{/aScene}}
</template>
```
## Table of Contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Hello World!](#hello-world)
- [About the project](#about-the-project)
- [But first ...](#but-first-)
- [The packages](#the-packages)
- [Helpers](#helpers)
  - [Core](#core)
  - [Primitives](#primitives)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## About the project

*__Disclaimer__: This package is intended and should be treated as an experiment.*

The purpose of this project is to integrate the awesome [A-Frame](https://aframe.io/) WebVR framework into [Meteor](https://www.meteor.com/), and more specifically to give it superpowers via Blaze. Why, you ask? If you're a Meteor developer and want to dive into the world of VR development, this package should hopefully serve as the main entry point to this exciting new world.

It is important to note that you can [get started](https://aframe.io/docs/guide/installation.html#Standalone_Downloads) with A-Frame right away by simply including the `aframe.js` script in your app and using the standard `<a-entity></a-entity>` syntax. You don't need a meteor package for that. What this package does is it gives you block helpers for ~~all~~ most A-Frame elements, which you can use in a familiar way. For example, such a scenario is possible out of the box:

*helloWorld.js*
```js
Template.helloWorld.helpers({
  planets: function () {
    // You could store `components` and `animation` objects as properties in your collection
    // which you can just drop into your aFrame helpers
    return Planets.find({ solarSystem: 'Sol' });
  }
});
```

*helloWorld.html*
```handlebars
<template name="helloWorld">
  {{#aScene}}
    {{#each planets}}
      {{#aSphere components}}
        {{#aAnimation animation}}{{/aAnimation}}
      {{/aSphere}}
    {{/each}}
  {{/aScene}}
</template>
```

## But first ...

> __Read the docs, Luke!__ *- Star Wars, probably*

Before you jump right in, I recommend you take the time and:

- [x] Get comfortable with writing Meteor apps: [link](http://docs.meteor.com/#/full/resources)
- [ ] Read the A-Frame docs: [link](https://aframe.io/docs/guide/)

## The packages

The A-Frame Meteor package comes in 3 flavors, each one providing the same functionality, but differentiating themselves by the size of the `aframe.js` file included (standard, minified or none at all). Which one to use depends on your needs and use cases, but the basic breakdown is this:

- `vladbalan:aframe` - Hit the ground running; comes with the development unminified js file which provides some extra warnings.
- `vladbalan:aframe-light` - Only recommended for production; comes with the production minified js file.
- `vladbalan:aframe-blaze` - The core package; this package is included in the other two and provides all the functionality; you get to decide which `aframe.js` version to use and where to put it. Yay!

Depending on how things will progress, I will do my best to keep these packages up to date, but any help and suggestions are welcomed and encouraged!


## Helpers

The block helpers follow an intuitive pattern, in that `{{#aCurvedimage}}{{/aCurvedimage}}` corresponds to `<a-curvedimage></a-curvedimage>`. Notice that for consistency the "i" was not capitalized. 

Arguments can be passed the same way you would do it with A-Frame elements, or you could pass them directly through an object. So this:

```handlebars
  {{#aCylinder position="1 0.75 1" radius="0.5" height="1.5" color="#FFC65D"}}{{/aCylinder}}
```
is equivalent to this:
```handlebars
  {{#aCylinder yellowCylinder}}{{/aCylinder}}
```
where `yellowCylinder` could be a javascript object equal to:
```js
{
  position: [1, 0.75, 1],
  radius: 1 / 2,
  height: 1.5,
  color: "#FFC65D"
}
```
Notice the `position` property is an array, but it can also be a string (`"1 0.75 1"`) or an object (`{ x: 1, y: 0.75, z: 1 }`).

*__Tip:__ Wherever you need to set a `position`, `rotation`, or `scale` you can use any of the 3 formats (string, array or object).*

The following helpers are supported so far:

### Core
From A-Frame's [docs](https://aframe.io/docs/core/):
> A-Frame is based on an entity-component system, a pattern common in game development that emphasizes composability:
>
> - An entity is a general-purpose object in the scene (e.g., player, enemy, tree, sky).
> - A component consists of properties that modifies the behavior or functionality of an entity.
>
> An entity can have multiple components, and an entity’s behavior can be changed at runtime by adding, removing, or modifying components. As we will see below, this will provide great flexibility over traditional inheritance patterns.

- `aScene`
- `aEntity`
- `aAnimation`
- ~~`aMixin`~~ - *not yet supported*
- `aAssets`

*__Note:__ Templates are not implemented because: a) `<template>` elements are already used by Blaze so it would require some hacky solution to get them working; b) the [A-Frame website](https://aframe.io/docs/core/templates.html) says that templates `will soon be rearchitected and placed on a separate abstraction layer.`; c) you can already use Blaze templates to achieve similar, if not more useful functionality.*


### Primitives
From A-Frame's [docs](https://aframe.io/docs/core/):
> Primitives are concise, semantic building blocks blocks that wrap A-Frame’s underlying entity-component system. A-Frame ships with a handful of built-in primitives for common use cases such as `<a-cube>`, `<a-model>`, and `<a-sky>`.

- `aCamera`
- `aCube`
- `aCurvedimage`
- `aCylinder`
- `aImage`
- `aLight`
- `aModel`
- `aPlane`
- `aSky`
- `aSphere`
- `aVideo`
- `aVideosphere`

## License

This software was made with &#10084; for the whole &#128506; to [use](LICENSE).