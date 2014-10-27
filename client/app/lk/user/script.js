define([
  'tpl!app/lk/user/template.tpl'
, 'json!app/lk/user/' + App.Utils.getLang() + '.json'
/*, 'css!app/lk/user/style'*/
], function(tmpl, messages) {
  App.Classes.Models.User = Backbone.Model.extend({
    urlRoot : '/lk/user',
    defaults: {
      firstname: '',
      surname: '',
      middlename: '',
      birthday : '',
      age : 0
    },
    login : App.Login,
    validate : function(attrs) {
      if (attrs.login.length === 0) {
        return messages.errorUserFormFirstnameEmpty;
      }
      if (attrs.password.length === 0) {
        return messages.errorUserFormSurnameEmpty;
      }
    }
  });

  App.Classes.Views.User = Backbone.View.extend({
    template : tmpl['lk-user-template-id'](messages),
    el       : App.Settings.LkContainer,
    render   : function() {
      App.Settings.LkContainer.html(this.template);
      this.errorTitle = this.$el.find('.error');
      this.showError(false);
      this.modelBinder.bind(this.model, App.Settings.LkContainer);
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
});





