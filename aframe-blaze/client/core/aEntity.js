UI.registerHelper('aEntity', function () {
  var data = this.components ? this.components : this;

  setAttributes (data, '_aEntity', COMPONENTS.concat(ENTITY_ATTRIBUTES));
  return Template._aEntity;
});