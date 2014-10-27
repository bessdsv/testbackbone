define(['md5', 'json!app/lk/login/' + App.Utils.getLang() + '.json', 'jquery.cookie'], function(md5, messages) {
  App.Classes.Models.Lk = App.Classes.Models.Lk || {};
  App.Classes.Models.Lk.Login = Backbone.Model.extend({
    get : function(){
      var arg = arguments[0];
      if (arg == 'password' && this.attributes[arg].length > 0){
        return md5(this.attributes[arg]);
      } else {
        return Backbone.Model.prototype.get.apply(this, arguments);
      }
    },
    toJSON : function(){
      var res = Backbone.Model.prototype.toJSON.apply(this, arguments);
      if (res.password.length > 0){
        res.password = md5(res.password);
      }
      return res;
    },
    defaults : {
      login       : '',
      password    : ''
    },

    isAutorized : false,
    roles       : ['public'],

    url : '/lk/user/login',

    autorizeSuccess : function(user){
      this.User = App.User = new App.Classes.Models.User(user);
      App.Router.navigate('lk', {trigger : true, replace : true});
    },

    autorize : function() {
      var that = this;
      this.sync('create', this, {
        success : function(response) {
          that.isAutorized = true;
          that.roles = response.roles;
          if (!App.Classes.Models.User){
            require(['app/lk/user/script'], function(){
              that.autorizeSuccess(response.user);
            });
          } else {
            that.autorizeSuccess(response.user);
          }
        },
        error   : function() {
          that.isAutorized = false;
        }
      });
    },

    logout : function(){
      delete App.User;
      delete this.User;
      App.Login.roles = App.Settings.defaultUserRoles;
      App.Login.isAutorized = false;
      var that = this;
      this.sync('read', this, {
        url : '/lk/user/logout'
      });
      $.removeCookie('connect.sid', {path : '/', domain : App.Settings.cookieDomain});
    },

    validate : function(attrs) {
      if (attrs.login.length === 0) {
        return messages.errorLoginFormLoginEmpty;
      }
      if (attrs.password.length === 0) {
        return messages.errorLoginFormPasswordEmpty;
      }
    }
  });
  App.Login = new App.Classes.Models.Lk.Login(App.Dev.Login || {});
});
