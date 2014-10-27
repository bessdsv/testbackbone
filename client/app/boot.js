requirejs.config({
  baseUrl : 'libs/js',
  paths   : {
    app : '../../app'
  },
  map     : {
    '*' : {
      'css' : 'css'
    }
  },
  shim    : {
    backbone               : {
      deps    : ['jquery', 'underscore'],
      exports : 'Backbone'
    },
    underscore             : {
      exports : '_'
    },
    bootstrap              : {
      deps : ['jquery']
    },
    "backbone.routefilter" : {
      deps : ['backbone']
    },
    underi18n              : {
      deps : ['underscore']
    },
    "backbone.modelbinder" : {
      deps : ['backbone']
    },
    "backbone.collectionbinder" : {
      deps : ['backbone.modelbinder']
    },
    "jquery.cookie" : {
      deps : ['jquery']
    },
    "app/root/script"      : {
      deps : ['backbone.routefilter', 'backbone.modelbinder', 'backbone.collectionbinder', 'underi18n', 'backbone', 'bootstrap', 'text', 'css', 'json', 'tpl']
    }
  }
});

(function() {
  window.App = {
    Utils     : {
      getLang            : function() {
        return ((navigator.language || navigator.userLanguage).toLowerCase() || window.App.Settings.defaultLang).match('(.*?)(-|$)')[1];
      },
      getMessagesFactory : function(messages) {
        if (_.isString(messages)) {
          messages = JSON.parse(messages);
        }
        return underi18n.MessageFactory(messages);
      }
    },
    Settings  : {
      defaultLang : 'ru',
      defaultUserRoles : ['public'],
      cookieDomain : 'localhost'
    },
    Templates : {},
    Dev : {Login : {login : 'test', password : 'test'}},
    Models      : {},
    Views       : {},
    Collections : {},
    Router      : {},
    Classes     : {
      Models      : {},
      Views       : {},
      Collections : {},
      Router      : {}
    }
  };

}());

require(['jquery'], function() {
  // IE8 and below specific scripts
  var rootScript = 'app/root/script';
  if ($('html.lt-ie9').size()) {
    require(['html5shiv', 'respond'], function() {
      require([rootScript]);
    });
  } else {
    require([rootScript]);
  }
});