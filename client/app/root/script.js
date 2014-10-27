define(["json!app/root/" + App.Utils.getLang() + ".json", "tpl!app/root/template.tpl", "app/lk/login/model"], function(messages, tmpl) {
  document.title = App.Utils.getMessagesFactory(messages)('appTitle');
  $('body').html(tmpl['root-template-id'](messages));
  App.Settings.PageContainer = $('.body');
  App.Classes.Router = Backbone.Router.extend({
    routes : {
      ''               : 'main',
      'main'           : 'main',
      'lk'             : 'lk',
      'lk/main'        : 'lk',
      'lk/login'       : 'lkLogin',
      'lk/profile'     : 'lkProfile',
      'lk/profile/:id' : 'lkProfile',
      'lk/logout'      : 'lkLogout'
    },

    isLkRoute : function(route) {
      return /^lk(\/.*)?$/.test(route);
    },

    lkBadRoutes : function(route){
      var navConfig = {trigger : true, replace : true}
        , isAutorized = App.Login.isAutorized
        , that = this;

      if (route == 'lk/login' && isAutorized) {
        setTimeout(function(){
          that.navigate('lk', navConfig);
        }, 100);
        return false;
      }
      if (route == 'lk/logout' && !isAutorized) {
        setTimeout(function() {
          that.navigate('lk/login', navConfig);
        }, 100);
        return false;
      }
      if (route != 'lk/login' && !isAutorized) {
        setTimeout(function() {
          that.navigate('lk/login', navConfig);
        }, 100);
        return false;
      }
    },

    before : {
      '*'            : function(route, params) {
        $('.menuItem').removeClass('active');
        $('.bootstrap-datetimepicker-widget').remove();
      },
      '^lk(\\/.*)?$' : function(route, params) {
        $('.menuItemSidebar').removeClass('active');
        if (this.before['*'](route, params) !== false) {
          $('#menuItemLk').addClass('active');
          if (App.Login.isAutorized && (!this.lastRoute || !this.isLkRoute(this.lastRoute) || this.lastRoute == 'lk/login')) {
            if (!App.Classes.Views.Lk.Container){
              var that = this
                , rt = route;
              require(['app/lk/container/view'], function(){
                App.Views.Lk.Container.render();
                $('.menuItemSidebar').removeClass('active');
                that[that.routes[rt]].apply(that, []);
              });
              return false;
            } else {
              App.Views.Lk.Container.render();
              return this.lkBadRoutes(route);
            }
          } else {
            return this.lkBadRoutes(route);
          }
        }
      }
    },

    after : function(route, params) {
      this.lastRoute = route;
    },

    main : function() {
      $('#menuItemMain').addClass('active');
      if (!App.Classes.Views.MainPage) {
        require(['app/main/script'], function() {
          App.Views.MainPage.render();
        });
      } else {
        App.Views.MainPage.render();
      }
    },

    lk        : function() {
      $('#sidebarLkMenuItemMain').addClass('active');
      if (!App.Classes.Views.Lk || !App.Classes.Views.Lk || !App.Classes.Views.Lk.MainPage) {
        require(['app/lk/main/script'], function() {
          App.Views.Lk.MainPage.render();
        });
      } else {
        App.Views.Lk.MainPage.render();
      }
    },
    lkLogin   : function() {
      if (!App.Classes.Views.Lk || !App.Classes.Views.Lk || !App.Classes.Views.Lk.Login) {
        require(['app/lk/login/view'], function() {
          App.Views.Lk.Login.render();
        });
      } else {
        App.Views.Lk.Login.render();
      }
    },
    lkProfile : function() {
      $('#sidebarLkMenuItemProfile').addClass('active');
      App.User.fetch();
      if (!App.Classes.Views.User ) {
        require(['app/lk/user/script'], function() {
          if (!App.Views.User){
            App.Views.User = new App.Classes.Views.User({model : App.User});
          }
          App.Views.User.render();
        });
      } else {
        if (!App.Views.User){
          App.Views.User = new App.Classes.Views.User({model : App.User});
        }
        App.Views.User.render();
      }
    },
    lkLogout : function(){
      $('#sidebarLkMenuItemLogout').addClass('active');
      App.Login.logout();
      this.navigate('lk', {trigger : true, replace : true});
    }
  });

  App.Router = new App.Classes.Router();

  Backbone.history.start();
});