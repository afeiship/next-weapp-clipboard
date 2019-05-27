/*!
 * name: next-weapp-clipboard
 * url: https://github.com/afeiship/next-weapp-clipboard
 * version: 1.0.0
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxWxPromisify = nx.wxPromisify || require('next-wx-promisify');
  var wx = global.wx;

  var NxWeappClipboard = nx.declare('nx.WeappClipboard', {
    statics: {
      set: function(inValue, inOptions) {
        wx.setClipboardData(
          nx.mix({ data: inValue }, nxWxPromisify(resolve, reject), inOptions)
        );
      },
      get: function(inOptions) {
        wx.getClipboardData(nx.mix(nxWxPromisify(resolve, reject), inOptions));
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappClipboard;
  }
})();
