Template.FlickrJump.onCreated(function(){
  var tmpl = this,
    requestObject = {
      group_id: '44671723@N00', // Equirectangular group Flickr Id
      per_page: 1,
    },
    flickr = new Flickr({
      api_key: 'your-api-key-but-you-should-not-put-it-here'
    }),
    total = new ReactiveVar(0),
    defaultSrc = '../_assets/images/loading-grid.png'

    // This uses FlowRouter, but you cand use Iron Router just as well.
    // Just remember to set up your route like 'path/to/FlickrJump/:tag?'
    tag = FlowRouter.getParam('tag');
  
  if (tag) {
    requestObject.text = tag;
  }  
  tmpl.src = new ReactiveVar(defaultSrc);
  tmpl.isButtonVisible = new ReactiveVar(false);

  // Abstracted common code for querying the Flickr API
  tmpl.queryEquirectangularPool = function(requestObject, callback){
    flickr.photos.search(requestObject, function(err, result) {
      if (err) { 
        console.error(err);
      } else {
        if (result && result.stat === 'ok') {
          callback(result);
        } else {
          console.warn('Result stat: ' + result && result.stat);
        }
      }
    });
  }

  tmpl.fetchTotal = function(){
    tmpl.queryEquirectangularPool(requestObject, function(result){
      if (result.photos.total > 0) {
        total.set(result.photos.total);
      } else {
        alert('There are no results for "' + requestObject.tags + '". Please try a different tag!');
      }
    });
  }

  tmpl.randomizeSky = function(){
    tmpl.isButtonVisible.set('false');

    document.querySelector('#loading-sky').emit('fadeIn');
    // If the new image is unavailable the screen sometimes flashes with the previous image
    setTimeout(function(){
     tmpl.src.set(defaultSrc);
    }, 500);

    var randomPage = _.sample(_.range(1, total.get()));

    tmpl.queryEquirectangularPool(_.extend(requestObject, { page: randomPage }), function(result){
      if (result.photos.photo.length) {
        var photoSource = buildPhotoSource(result.photos.photo[0]);
        // Check if photo exists/is available
        $.get(photoSource)
          .done(function() { 
            tmpl.src.set(photoSource);

            // The new picture doesn't load instantaneously
            setTimeout(function(){
              document.querySelector('#loading-sky').emit('fadeOut');
            }, 1000);

            setTimeout(function(){
              tmpl.isButtonVisible.set('true');
            }, 1500);
          }).fail(function() { 
            // If the photo is unavailable, try another random photo
            tmpl.randomizeSky();
          })
      }
    });
  }

  tmpl.animate = function (options) {
    var animation = _.pick(options, ['attribute', 'begin', 'dur']);

    if (options.begin === options.initialEvent) {
      animation.from = options.initialValue;
      animation.to = options.finalValue;
    } else if (options.begin === options.finalEvent) {
      animation.from = options.finalValue;
      animation.to = options.initialValue;
    }

    return animation;
  }
  
  tmpl.fetchTotal();

  tmpl.autorun(function(){
    if (total.get() > 0) {
      tmpl.randomizeSky();
    }
  });
});

Template.FlickrJump.helpers({
  flickrSky: function () {
    return {
      id: 'flickr-sky',
      radius: 5000,
      rotation: [0, -90, 0],
      src: Template.instance().src.get(),
    }
  },
  loadingSky: function () {
    return {
      id: 'loading-sky',
      opacity: 1,
      radius: 4080,
      rotation: [0, -90, 0],
      src: '../_assets/images/loading-grid.png',
    }
  },
  camera: function () {
    return {
      id: 'camera',
      rotation: [0, 90, 0],
      cursor: 'fuse: true'
    }
  },
  button: function () {
    var tmpl = Template.instance();
    return {
      id: 'jump-button',
      position: [0, -1, -5],
      rotation: [0, -90, 10],
      radius: 0.35,
      color: '#ececec',
      src: '../_assets/images/jump-orb.png',
      visible: tmpl.isButtonVisible.get(),
      sound: {
        src: '../_assets/_sounds/digi_plink.wav',
        on: 'mouseenter'
      },
    }
  },
  buttonGlow: function () {
    var tmpl = Template.instance();
    return {
      id: 'jump-button-glow',
      position: [0, -1, -5],
      height: 1.7,
      width: 1.7,
      color: 'transparent',
      src: '../_assets/images/glow.png',
      visible: tmpl.isButtonVisible.get()
    }
  },
  buttonScale: function (begin) {
     return Template.instance().animate({
      attribute: 'scale',
      begin: begin,
      dur: 150,
      initialValue: [1, 1, 1],
      finalValue: [1.1, 1.1, 1.1],
      initialEvent: 'mouseenter',
      finalEvent: 'mouseleave',
    });
  },
  skyFade: function (begin) {
    return Template.instance().animate({
      attribute: 'material.opacity',
      begin: begin,
      dur: 400,
      initialValue: '1',
      finalValue: '0',
      initialEvent: 'fadeOut',
      finalEvent: 'fadeIn',
    });
  },
  cursor: function () {
    return { color: "#3BA0E3" };
  },
});

Template.FlickrJump.events({
  'click #jump-button': function () {
    return _.debounce(Template.instance().randomizeSky, 5000, true)();
  }
});

function buildPhotoSource (photo) {
  return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_h.jpg';
}