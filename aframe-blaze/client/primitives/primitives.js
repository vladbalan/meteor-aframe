_.each(PRIMITIVES, function(primitive){
  UI.registerHelper(primitive.name, function () {
    var templateName = '_' + primitive.name;
    setAttributes (this, templateName, primitive.attributes.concat(COMMON_ATTRIBUTES.concat(COMPONENTS)), primitive.name);
    return Template[templateName];
  });
});