A-Frame for Meteor - Core package
===========================

Add WebVR goodness to your Meteor app with A-Frame and Blaze.

## Hello World!

1. Include `https://aframe.io/releases/latest/aframe.js` in your app

2. Add the package to your app: `meteor add vladbalan:aframe-blaze`

3. Create a template and add your scene

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
Read the full documentation [here](https://github.com/vladbalan/meteor-aframe).