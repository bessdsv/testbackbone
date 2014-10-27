define([
  'tpl!app/lk/login/template.tpl'
, 'json!app/lk/login/' + App.Utils.getLang() + '.json'
, 'css!app/lk/login/style'
], function(tmpl, messages) {
  App.Classes.Views.Lk = App.Classes.Views.Lk || {};
  App.Classes.Views.Lk.Login = Backbone.View.extend({
    template   : tmpl['lk-login-template-id'](messages),
    el         : App.Settings.PageContainer,
    render     : function() {
      this.$el.html(this.template);
      this.errorTitle = this.$el.find('.error');
      this.showError(false);
      this.modelBinder.bind(this.model, this.el);
      return this;
    },
    initialize : function() {
      this.modelBinder = new Backbone.ModelBinder();
    },
    events     : {
      'submit' : 'submit',
      'keypress' : 'keypress'
    },
    keypress : function(e){
      if (this.hasError){
        this.showError(false);
      }
    },

    showError : function(state){
      this.errorTitle.css('display', (this.hasError = state) ? '' : 'none');
    },

    submit     : function(e) {
      e.preventDefault();
      if (this.model.isValid()) {
        this.model.autorize();
      } else {
        this.errorTitle.html(this.model.validationError);
        this.showError(true);
      }
    }
  });
  App.Views.Lk = App.Views.Lk || {};
  App.Views.Lk.Login = new App.Classes.Views.Lk.Login({model : App.Login});
});
