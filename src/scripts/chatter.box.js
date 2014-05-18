define([], function() {
  return window.EmpathyBox = (function() {
    function EmpathyBox($canvas, $textArea, $butt) {
      var that;
      a = $canvas;
      that = this;
      debugger;
      this.$canvas = $canvas;
      this.$textArea = $textArea;
      this.$butt = $butt;
      that = this;
      emotion = $textArea.emo()
      canvasArt1 = $canvas.art();
      //this.empathyPanel = new emo$.Gui.EmpathyPanel(100, emo$.Engine.Emotion.SynesthesiatorEmotion, 'Synemania', $canvas);
      this.$textArea.keypress(function(e) {
        var text;
        if (e.which === 13) {
          emotion = $textArea.emo()
        }
      });
      var socket = io.connect();
      aaa.on('message', function(data) {
        debugger;
        //addMessage(data['message'], data['pseudo'], new Date().toISOString(), false);
        //console.log(data);
        var text = data;
        // todo : make this more nice:
        $('#incomingMessageInput').text(data.message);
        emotion = $('#incomingMessageInput').emo();
        $('#incomingMessageInput').text('');
        //return that.empathyPanel.fireSynesthesiator(text);
      });
      this.$butt.click(function(e) {
        emotion = $textArea.emo()
      });
      setInterval(function() {
        var results;
        canvasArt1.draw();
        //return results = that.empathyPanel.applet.draw();
      }, 10);
    }

    EmpathyBox.prototype.getAppCanvas = function() {
      return this.empathyPanel;
    };

    EmpathyBox.prototype.getTextArea = function() {
      return this.$textArea;
    };

    return EmpathyBox;

  })();
});
