define(["json!app/lk/container/" + App.Utils.getLang() + ".json", "tpl!app/lk/container/template.tpl"], function(messages, tmpl) {

  App.Classes.Views.Lk = App.Classes.Views.Lk || {};
  App.Classes.Views.Lk.Container = Backbone.View.extend({
    template : tmpl['lk-template-id'](messages),
    el       : App.Settings.PageContainer,
    render   : function() {
      this.$el.html(this.template);
      App.Settings.LkContainer = $('.lkBody');
    }
  });
  App.Views.Lk = App.Views.Lk || {};
  App.Views.Lk.Container = new App.Classes.Views.Lk.Container;
});