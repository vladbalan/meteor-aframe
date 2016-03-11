COMPONENTS = ['camera', 'cursor', 'fog', 'geometry', 'light', 'loader', 'look-at', 'look-controls', 'material', 'position', 'raycaster', 'rotation', 'scale', 'sound', 'visible', 'wasd-controls'];
ENTITY_ATTRIBUTES = ['mixin'];
COORDINATE_SYSTEMS = ['position', 'rotation', 'scale', 'to', 'from'];
ANIMATION_ATTRIBUTES = ['attribute', 'begin', 'direction', 'dur', 'easing', 'fill', 'from', 'repeat', 'to'];
COMMON_ATTRIBUTES = ['position', 'rotation', 'scale'];
PRIMITIVES = [
  {
    name: 'aCamera',
    attributes: ['cursor-color', 'cursor-maxdistance', 'cursor-offset', 'cursor-opacity', 'cursor-scale', 'cursor-visible', 'far', 'fov', 'look-controls-enabled', 'near', 'wasd-controls-enabled']
  },
  {
    name: 'aCube',
    attributes: ['color', 'depth', 'height', 'metalness', 'opacity', 'roughness', 'shader', 'transparent', 'translate', 'src', 'width']
  },
  {
    name: 'aCurvedimage',
    attributes: ['height', 'opacty', 'radius', 'segments-radial', 'src', 'theta-length', 'theta-start', 'transparent']
  },
  {
    name: 'aCylinder',
    attributes: ['color', 'height', 'metalness', 'opacity', 'open-ended', 'radius', 'radius-bottom', 'radius-top', 'roughness', 'segments-height', 'segments-radial', 'shader', 'side', 'src', 'theta-length', 'theta-start', 'transparent']
  },
  {
    name: 'aImage',
    attributes: ['height', 'opacity', 'src', 'width']
  },
  {
    name: 'aLight',
    attributes: ['angle', 'color', 'decay', 'distance', 'exponent', 'ground-color', 'intensity', 'type']
  },
  {
    name: 'aModel',
    attributes: ['format', 'opacity', 'src']
  },
  {
    name: 'aPlane',
    attributes: ['color', 'height', 'metalness', 'opacity', 'roughness', 'shader', 'src', 'translate', 'transparent', 'width']
  },
  {
    name: 'aSky',
    attributes: ['color', 'radius', 'segments-height', 'segments-width', 'src']
  },
  {
    name: 'aSphere',
    attributes: ['color', 'metalness', 'opacity', 'radius', 'roughness', 'segments-height', 'segments-width', 'shader', 'src', 'translate', 'transparent']
  },
  {
    name: 'aVideo',
    attributes: ['autoplay', 'crossOrigin', 'height', 'loop', 'src', 'translate', 'width']
  },
  {
    name: 'aVideosphere',
    attributes: ['autoplay', 'crossOrigin', 'height', 'loop', 'radius', 'src', 'translate']
  },
];