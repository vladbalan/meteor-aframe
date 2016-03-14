/**
 * In this scenario the cube, cylinder and plane's 
 * dimensions and positions are all relative to the sphere's.
 * 
 * This makes it easy to fine tune the entities and maintain
 * proportions, while only modifying the sphere's properties
 */

Template.HelloWorld.onCreated(function () {
  var u = 0.25;
  
  // The sphere
  this.sphere = {
    position: {
      x: 0 * u, 
      y: 5 * u, 
      z: - 4 * u
    },
    radius: 5 * u,
    color: '#EF2D5E',
  };

  // The cube
  this.cube = {
    rotation: [0, 45, 0],
    color: '#4CC3D9',
  }
  this.cube.width = this.cube.height = this.cube.depth = this.sphere.radius * 4 / 5;
  this.cube.position = {
    x: this.sphere.position.x - this.cube.width, 
    y: this.sphere.position.y - (this.cube.width * 3 / 4), 
    z: this.sphere.position.z + (this.cube.width * 2)
  };

  // The cylinder
  this.cylinder = {
    position: {
      x: this.sphere.position.x + (this.sphere.radius * 4 / 5),
      y: this.sphere.position.y - (this.sphere.radius * 2 / 5),
      z: this.sphere.position.z + (this.sphere.radius * 8 / 5)
    },
    radius: this.sphere.radius * 2 / 5,
    height: this.sphere.radius * 6 / 5,
    color: '#FFC65D'
  };

  // The plane
  this.plane = {
    rotation: [-90, 0, 0],
    color: '#7BC8A4'
  };
  this.plane.width = this.plane.height = this.sphere.radius * 16 / 5;

  // The sky
  this.sky = { color: '#ECECEC' };
});

Template.HelloWorld.helpers({
  sphere: function () {
    return Template.instance().sphere;
  },
  cube: function () {
    return Template.instance().cube;
  },
  cylinder: function () {
    return Template.instance().cylinder;
  },
  plane: function () {
    return Template.instance().plane;
  },
  sky: function () {
    return Template.instance().sky;
  }
});