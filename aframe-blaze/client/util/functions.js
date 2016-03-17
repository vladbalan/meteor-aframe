// Ideally we would want to use aframe's stringifying system without rewriting our own
stringifyComponent = function (componentName, properties) {
  var componentValue;

  if (_.contains(COORDINATE_SYSTEMS, componentName)) {
    properties = _.map(properties, function(propValue, propName) {
      return propValue;
    });
    componentValue = properties.join(' ');
  } else {
    properties = _.map(properties, function(propValue, propName) {
      return propName + ': ' + propValue;
    });
    componentValue = properties.join('; ');
  }

  return componentValue;
}

setAttributes = function (data, templateName, attributeNames) {
  var helpers = {}
    attributes = [];

  _.each(attributeNames, function(attributeName){
      var component = {},
        attributeValue = data[attributeName];
      if (attributeValue) {
        if (_.isObject(attributeValue)) {
          attributeValue = stringifyComponent(attributeName, attributeValue);
        }
        component[attributeName] = attributeValue;
        attributes.push(component);
      }
  });
  
  Template[templateName].helpers({
    attributes: function () {
      return attributes;
    }
  });
}