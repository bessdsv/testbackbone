define(["json!app/main/" + App.Utils.getLang() + ".json", "tpl!app/main/template.tpl"], function(messages, tmpl) {
  App.Classes.Views.MainPage = Backbone.View.extend({
    template : tmpl['main-template-id'](messages),
    el : App.Settings.PageContainer,
    render : function(){
      this.$el.html(this.template);
    }
  });

  App.Views.MainPage = new App.Classes.Views.MainPage;
});