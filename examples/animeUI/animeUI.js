Template.AnimeUI.onCreated(function(){
  var imagesFolder = "../_assets/images";

  // The wall lights
  this.wallLights = {
    components: {
      position: [-7.25, 1.5, 2.9],
      rotation: [0, 90, 0],
      scale: [1.25, 1.25, 1.25]
    },
    items: _.map(_.range(0, 13), function(x){
      return {
        components: {
          position: [x, 0, 0],
          rotation: [0, 0, 0],
          scale: [0.05, 0.05, 0.05]
        },
        parts: [
          {
            components: {
              width: 1,
              height: 4,
              shader: "flat",
              color: "#B4E2F8",
              translate: "0 0 0",
              position: [0, 0, 0]
            },
            animation: {
              attribute: "visible",
              from: false,
              to: true,
              begin: 350,
              dur: 1,
              fill: "both"
            }
          },
          {
            components: {
              width: 6,
              height: 4,
              translate: "-3 0 0",
              color: "#586266",
              opacity: 0.6,
              position: [0, 0, -.01]
            }
          }
        ]
      };
    })
  };

  // The schematics
  this.schematics = [
    {
      id: 'schematic-2',
      components: {
        position: [0, 0, -6],
        scale: [0.7, 0.7, 0.7]
      },
      parts: [
        {
          image: { src: imagesFolder + "/glow1.png", scale: "5 5 5", position: "0 0 -2", rotation: "0 0 0", opacity: 1 },
          animation: { attribute: "visible", from: false, to: true, begin: 1500, dur: 1, fill: "both" }
        },
        {
          image: { src: imagesFolder + "/ring2.png", scale: "1.75 1.75 1.75", position: "0 0 -1.2", rotation: "0 0 0", opacity: 1 },
          animation: { attribute: "visible", from: false, to: true, begin: 1400, dur: 1, fill: "both" }
        },
        {
          image: { src: imagesFolder + "/ring5.png", scale: "1.2 1.2 1.2", position: "0 -1.5 -2.1", rotation: "0 0 0", opacity: 1 },
          animation: { attribute: "visible", from: false, to: true, begin: 1550, dur: 1, fill: "both" }
        },
        {
          image: { src: imagesFolder + "/schematic5.png", scale: "2 2 2", position: "2.5 0 -1.02", rotation: "0 0 0", opacity: "0.75" },
          animation: { attribute: "visible", from: false, to: true, begin: 1500, dur: 1, fill: "both" }
        },
        {
          image: { src: imagesFolder + "/schematic4.png", scale: "1.5 1.5 1.5", position: "0 -3 -1.01", rotation: "0 0 90", opacity: "0.75" },
          animation: { attribute: "visible", from: false, to: true, begin: 1500, dur: 1, fill: "both" }
        },
        {
          image: { src: imagesFolder + "/schematic3.png", scale: "1 1 1", position: "0 2.7 -1", rotation: "0 0 0", opacity: "0.75" },
          animation: { attribute: "visible", from: false, to: true, begin: 1450, dur: 1, fill: "both" }
        },
        {
          image: { src: imagesFolder + "/schematic1.png", scale: "2 2 2", position: "0 0 0", rotation: "0 0 0", opacity: 1 },
          animation: { attribute: "visible", from: false, to: true, begin: 1400, dur: 1, fill: "both" }
        },
        {
          image: { src: imagesFolder + "/text2.png", scale: ".5 .5 .5", position: "-1 3 .02", rotation: "0 0 0", opacity: 1 },
          animation: { attribute: "visible", from: false, to: true, begin: 1350, dur: 1, fill: "both" }
        },
        {
          image: { src: imagesFolder + "/text4.png", scale: "1 1 1", position: "-2 -2 .03", rotation: "0 0 0", opacity: 1 },
          animation: { attribute: "visible", from: false, to: true, begin: 1300, dur: 1, fill: "both" }
        }
      ]
    },
    {
      id: 'schematic-1',
      components: {
        position: [0, 0, -3]
      },
      parts: [
        {
          image: { src: imagesFolder + "/schematic2.png", scale: "0.7 0.7 0.7", position: "0 0 0" },
          attribute: { attribute: "visible", from: "false", to: "true", begin: "1200", dur: "1", fill: "both" }
        },
        {
          image: { src: imagesFolder + "/text1.png", scale: "0.2 0.2 0.2", position: "2 0 .02" },
          attribute: { attribute: "visible", from: "false", to: "true", begin: "1200", dur: "1", fill: "both" }
        },
        {
          image: { src: imagesFolder + "/text3.png", scale: "0.4 0.4 0.4", position: "-1 1 .01" },
          attribute: { attribute: "visible", from: "false", to: "true", begin: "1200", dur: "1", fill: "both" }
        }
      ]
    }
  ];

  // The rings groups
  this.ringsGroups = [
    {
      id: 'rings-group-3',
      components: {
        position: [0, 0, -2],
        scale: [0.5, 0.5, 0.5]
      },
      parts: [
        {
          image: { src: imagesFolder + "/ring3.png", scale: ".8 .8 .8", position: "0 0 0" },
          animation: { attribute: "visible", from: "false", to: "true", begin: "1000", dur: "1", fill: "both" }
        },
        {
          image: { src: imagesFolder + "/ring5.png", scale: ".9 .9 .9", position: "0 0 .01" },
          animation: { attribute: "visible", from: "false", to: "true", begin: "1100", dur: "1", fill: "both" }
        },
        {
          image: { src: imagesFolder + "/ring3.png", position: "0 0 .02" },
          animation: { attribute: "visible", from: "false", to: "true", begin: "1100", dur: "1", fill: "both" }
        }
      ]
    },
    {
      id: 'rings-group-2',
      components: {
        position: [0, 0, -1],
        scale: [0.5, 0.5, 0.5]
      },
      parts: [
        {
          image: { src: imagesFolder + "/ring2.png", scale: "1.2 1.2 1.2", position: "0 0 .01" },
          animation: { attribute: "visible", from: "false", to: "true", begin: "800", dur: "1", fill: "both" }
        },
        {
          image: { src: imagesFolder + "/text1.png", scale: "0.3 0.3 0.3", position: "1.4 0 .02" },
          animation: { attribute: "visible", from: "false", to: "true", begin: "900", dur: "1", fill: "both" }
        }
      ]
    },
    {
      id: 'rings-group-1',
      components: {
        position: [0, 0, 0],
        scale: [0.6, 0.6, 0.6]
      },
      parts: [
        {
          image: { src: imagesFolder + "/ring5.png", scale: "1.2 1.2 1.2", position: "0 0 0" },
          animation: { attribute: "visible", from: "false", to: "true", begin: "600", dur: "1", fill: "both" }
        },
        {
          image: { src: imagesFolder + "/ring4.png", scale: "1.2 1.2 1.2", position: "0 0 .01" },
          animation: { attribute: "visible", from: "false", to: "true", begin: "600", dur: "1", fill: "both" }
        },
        {
          image: { src: imagesFolder + "/ring3.png", scale: "1 1 1", position: "0 0 .02" },
          animation: { attribute: "visible", from: "false", to: "true", begin: "700", dur: "1", fill: "both" }
        }
      ]
    }
  ];

});

Template.AnimeUI.helpers({
  wallLights: function () {
    return Template.instance().wallLights;
  },
  schematics: function () {
    return Template.instance().schematics;
  },
  ringsGroups: function () {
    return Template.instance().ringsGroups;
  }
});