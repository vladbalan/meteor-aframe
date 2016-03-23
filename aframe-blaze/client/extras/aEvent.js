UI.registerHelper('aEvent', function () {
  setAttributes (this, '_aEvent', EVENT_ATTRIBUTES.concat(COMMON_ATTRIBUTES));
  return Template._aEvent;
});

