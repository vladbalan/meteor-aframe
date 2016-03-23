COMPONENTS = ['camera', 'cursor', 'fog', 'geometry', 'light', 'loader', 'look-at', 'look-controls', 'material', 'position', 'raycaster', 'rotation', 'scale', 'sound', 'visible', 'wasd-controls'];
ENTITY_ATTRIBUTES = ['id', 'mixin'];
COORDINATE_SYSTEMS = ['position', 'rotation', 'scale', 'to', 'from'];
ANIMATION_ATTRIBUTES = ['id', 'attribute', 'begin', 'direction', 'dur', 'easing', 'fill', 'from', 'repeat', 'to'];
EVENT_ATTRIBUTES = ['id', 'name', 'property', 'target', 'value'];
COMMON_ATTRIBUTES = ['id', 'position', 'rotation', 'scale', 'visible'];
PRIMITIVES = {
  aCamera: {
    name: 'aCamera',
    attributes: ['cursor', 'cursor-color', 'cursor-maxdistance', 'cursor-offset', 'cursor-opacity', 'cursor-scale', 'cursor-visible', 'far', 'fov', 'look-controls-enabled', 'near', 'wasd-controls-enabled']
  },
  aCircle: {
    name: 'aCircle',
    primitive: 'circle',
    attributes: ['radius','segments','theta-length','theta-start']
  },
  aColladaModel: {
    name: 'aColladaModel',
    attributes: ['opacity', 'src']
  },
  aCone: {
    name: 'aCone',
    primitive: 'cone',
    attributes: ['height', 'open-ended', 'radius-bottom', 'radius-top', 'segments-height', 'segments-radial', 'theta-length', 'theta-start', 'translate', 'src']
  },
  aBox: {
    name: 'aBox',
    primitive: 'box',
    attributes: ['color', 'depth', 'height', 'metalness', 'opacity', 'roughness', 'shader', 'transparent', 'translate', 'src', 'width']
  },
  aCursor: {
    name: 'aCursor',
    // primitive: 'ring',
    attributes: ['maxDistance', 'radiusOuter', 'radiusInner', 'segmentsTheta', 'color', 'shader', 'opacity', 'fuse', 'maxDistance', 'max-distance']
  },
  aCurvedimage: {
    name: 'aCurvedimage',
    // primitive: 'cylinder',
    attributes: ['height', 'opacty', 'radius', 'segments-radial', 'src', 'theta-length', 'theta-start', 'transparent']
  },
  aCylinder: {
    name: 'aCylinder',
    primitive: 'cylinder',
    attributes: ['color', 'height', 'metalness', 'opacity', 'open-ended', 'radius', 'radius-bottom', 'radius-top', 'roughness', 'segments-height', 'segments-radial', 'shader', 'side', 'src', 'theta-length', 'theta-start', 'transparent']
  },
  aImage: {
    name: 'aImage',
    // primitive: 'plane',
    attributes: ['height', 'opacity', 'src', 'width']
  },
  aLight: {
    name: 'aLight',
    attributes: ['angle', 'color', 'decay', 'distance', 'exponent', 'ground-color', 'intensity', 'type']
  },
  aObjModel: {
    name: 'aObjModel',
    attributes: ['opacity', 'src', 'mtl']
  },
  aPlane: {
    name: 'aPlane',
    primitive: 'plane',
    attributes: ['color', 'height', 'metalness', 'opacity', 'roughness', 'shader', 'src', 'translate', 'transparent', 'width']
  },
  aRing: {
    name: 'aRing',
    primitive: 'ring',
    attributes: ['radius-inner','radius-outer','segments-phi','segments-theta','theta-length','theta-start']
  },
  aSky: {
    name: 'aSky',
    // primitive: 'sphere',
    attributes: ['color', 'radius', 'segments-height', 'segments-width', 'src']
  },
  aSphere: {
    name: 'aSphere',
    primitive: 'sphere',
    attributes: ['color', 'metalness', 'opacity', 'radius', 'roughness', 'segments-height', 'segments-width', 'shader', 'src', 'translate', 'transparent']
  },
  aVideo: {
    name: 'aVideo',
    // primitive: 'plane',
    attributes: ['autoplay', 'crossOrigin', 'height', 'loop', 'src', 'translate', 'width']
  },
  aVideosphere: {
    name: 'aVideosphere',
    // primitive: 'sphere',
    attributes: ['autoplay', 'crossOrigin', 'height', 'loop', 'radius', 'src', 'translate']
  },
};
// Deprecated:
PRIMITIVES.aCube = { 
  name: 'aCube',
  primitive: 'box',
  attributes: PRIMITIVES.aBox.attributes,
  deprecated: true
};
PRIMITIVES.aModel = { 
  name: 'aModel',
  attributes: PRIMITIVES.aColladaModel.attributes,
  deprecated: true
};