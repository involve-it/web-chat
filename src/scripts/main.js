requirejs.config({
  paths: {
    'core' : 'http://localhost:8999/core',
    'libs' : 'http://localhost:8999/libs',
    //'core' : 'emo',
    //'libs' : 'http://localhost:8999/libs',

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
    'xml2json' : {
      //exports : ['global.libs.x2js']
    }
    /*'gui': {
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
    }*/
  }
});
global = window.Emo = window.emo = {};


try {
  require(['chatter.box', 'jquery', 'underscore', 'xml2json', 'libs'], function(ChatterBox) {
    debugger;
    return require([ 'core'], function() {


      debugger;

      require(['core/main'] , function() {
        debugger;

        chatterBox = new ChatterBox($('#canvas'), $('#messageInput'), $('#submit'))
      });
    });
    });
} catch (e) {
  debugger;
}

/*  require(['chatter.box', 'art', 'gui', 'api', 'core', 'engine', 'libs'], function (ChatterBox) {
    chatterBox = new ChatterBox($('#canvas'), $('#messageInput'), $('#submit'))

    debugger;
  });
} catch (e) {}*/
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
