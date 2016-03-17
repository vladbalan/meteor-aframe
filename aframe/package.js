Package.describe({
  name: 'vladbalan:aframe',
  version: '0.2.0',
  summary: 'Create WebVR apps with A-Frame and Blaze',
  git: 'https://github.com/vladbalan/meteor-aframe',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  api.use('vladbalan:aframe-blaze@0.2.0');

  api.addFiles('client/src/aframe.js', 'client');
});