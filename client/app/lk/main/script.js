define(["json!app/lk/main/" + App.Utils.getLang() + ".json", "tpl!app/lk/main/template.tpl"], function(messages, tmpl) {
  App.Classes.Views.Lk = App.Classes.Views.Lk || {};
  App.Classes.Views.Lk.MainPage = Backbone.View.extend({
    template : tmpl['lk-main-template-id'],
    messages : messages,
    el       : App.Settings.LkContainer,
    render   : function() {
      App.Settings.LkContainer.html(this.template($.extend({}, this.messages, App.User.toJSON())));
    }
  });
  App.Views.Lk = App.Views.Lk || {};
  App.Views.Lk.MainPage = new App.Classes.Views.Lk.MainPage;
});