Package.describe({
  name: 'vladbalan:aframe-light',
  version: '0.0.1',
  summary: 'Create WebVR apps with A-Frame and Blaze',
  git: 'https://github.com/vladbalan/meteor-aframe',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  api.use('vladbalan:aframe-blaze@0.0.1');

  api.addFiles('client/src/aframe.min.js', 'client');
});