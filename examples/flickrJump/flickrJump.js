Template.FlickrJump.onCreated(function(){
  var tmpl = this,
    requestObject = {
      group_id: '44671723@N00', // Equirectangular group Flickr Id
      per_page: 1,
    },
    flickr = new Flickr({
      api_key: 'your-api-key-but-you-should-not-put-it-here'
    }),
    total = new ReactiveVar(10000),
    defaultSrc = '../_assets/images/loading-grid.png';
    
  tmpl.src = new ReactiveVar(defaultSrc);
  tmpl.isButtonVisible = new ReactiveVar(true);

  // Abstracted common code for querying the Flickr API
  tmpl.queryEquirectangularPool = function(requestObject, callback){
    flickr.groups.pools.getPhotos(requestObject, function(err, result) {
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
      total.set(result.photos.total);
    });
  }

  tmpl.randomizeSky = function(){
    console.log('randomizeSky')
    tmpl.isButtonVisible.set('false');
    tmpl.src.set(defaultSrc);

    var randomPage = _.sample(_.range(1, total.get()));

    tmpl.queryEquirectangularPool(_.extend(requestObject, { page: randomPage }), function(result){
      if (result.photos.photo.length) {
        var photoSource = buildPhotoSource(result.photos.photo[0]);
        // Check if photo exists/is available
        $.get(photoSource)
          .done(function() { 
            tmpl.src.set(photoSource);
            setTimeout(function(){
              tmpl.isButtonVisible.set('true');
            }, 3000);
          }).fail(function() { 
            // If the photo is unavailable, try another random photo
            tmpl.randomizeSky();
          })
      }
    });
  }
  
  // For performance/demo purposes the pool total defaults to 10k, but this would be a more precise way
  // tmpl.fetchTotal();
  
  tmpl.randomizeSky();
});

Template.FlickrJump.helpers({
  flickrSky: function () {
    return {
      src: Template.instance().src.get(),
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
       position: [-5, -1, 0],
       rotation: [0, 5, 0],
       width: 0.5,
       height: 1,
       depth: 2,
       color: '#ececec',
       src: '../_assets/images/jump-button.png',
       visible: tmpl.isButtonVisible.get()
    }
  }
});

Template.FlickrJump.events({
  'click #jump-button': function () {
    return _.debounce(Template.instance().randomizeSky, 5000, true)();
  }
});

function buildPhotoSource (photo) {
  return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_h.jpg';
}