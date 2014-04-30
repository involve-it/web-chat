requirejs.config({
  paths: {
    'api' : 'http://localhost:8666/js/_api_',
    'art' : 'http://localhost:8666/js/_art_',
    'gui' : 'http://localhost:8666/js/_gui_',
    'engine' : 'http://localhost:8666/js/_engine_',
    'core' : 'http://localhost:8666/js/_core_',
    'libs' : 'http://localhost:8666/js/_libs_',

    'underscore': '../libs/underscore-1.6.0',
    'jquery': '../libs/jquery-1.7.1.min',
    //'jquery': '../libs/jquery-2.1.0',
    'xml2json': '../libs/xml2json',
    'jquery-ui' : '../libs/jquery-ui',
    'chatter.box' : 'chatter.box'
  },
  packages : [
    {

    }
  ],
  shim: {
    'underscore': {
      exports: ['_']
    },
    'libs' : {
      deps : ['core.helpers/static.js']
    },

    'core' : {
      //deps : ['libs']
    },
    'gui': {
      deps: ['core', 'engine']
    },
    'art': {
      deps: ['core', 'engine', 'api']
    },
    'api': {
      deps: ['core', 'engine']
    },
    'engine' : {
      deps : ['core']
    }
  }
});

window.emo$ = {};

try {
  require(['chatter.box', 'art', 'gui', 'api', 'core', 'engine', 'libs'], function (ChatterBox) {
    chatterBox = new ChatterBox($('#canvas'), $('#messageInput'), $('#submit'))

    debugger;
  });
} catch (e) {}
/*
require(['libs', 'core'], function() {
  return require(['engine'], function() {
    return require(['api', 'gui', 'art'], function(underscore, synesketchState, synesthesiator) {
      return require(['./views/empathy.box.js'], function(EmpathyBoxView) {
        var empathyBox;
        empathyBox = new EmpathyBoxView($('#canvas'), $('#textArea'), $('#butt'));
        return $('#butt').trigger('click');
      });
    });
  });
});*/
