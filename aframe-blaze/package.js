Package.describe({
  name: 'vladbalan:aframe-blaze',
  version: '0.3.0',
  summary: 'Create WebVR apps with A-Frame and Blaze',
  git: 'https://github.com/vladbalan/meteor-aframe',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'templating',
    'underscore'
  ]);

  api.addFiles([
    // Def
    'client/util/constants.js',
    'client/util/functions.js',

    // Core
    'client/core/aAnimation.html',
    'client/core/aAnimation.js',
    'client/core/aAssets.html',
    'client/core/aAssets.js',
    'client/core/aEntity.html',
    'client/core/aEntity.js',
    // 'client/core/aMixin.html', // Mixins are buggy and are not yet supported
    // 'client/core/aMixin.js',
    'client/core/aScene.html',
    'client/core/aScene.js',

    // Extras   
    'client/extras/aEvent.html',    
    'client/extras/aEvent.js',    

    // Primitives
    'client/primitives/aBox.html',
    'client/primitives/aCamera.html',
    'client/primitives/aCircle.html',
    'client/primitives/aColladaModel.html',
    'client/primitives/aCone.html',
    'client/primitives/aCube.html',
    'client/primitives/aCursor.html',
    'client/primitives/aCurvedimage.html',
    'client/primitives/aCylinder.html',
    'client/primitives/aImage.html',
    'client/primitives/aLight.html',
    'client/primitives/aModel.html',
    'client/primitives/aObjModel.html',
    'client/primitives/aPlane.html',
    'client/primitives/aRing.html',
    'client/primitives/aSky.html',
    'client/primitives/aSphere.html',
    'client/primitives/aVideo.html',
    'client/primitives/aVideosphere.html',
    'client/primitives/primitives.js', 
  ], 'client');
});
