UI.registerHelper('aMixin', function () {
  var data = this.components ? this.components : this;

  setAttributes (data, '_aMixin', COMPONENTS);
  return Template._aMixin;
});