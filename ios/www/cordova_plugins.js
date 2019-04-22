cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-qrscanner.QRScanner",
    "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
    "pluginId": "cordova-plugin-qrscanner",
    "clobbers": [
      "QRScanner"
    ]
  },
  {
    "id": "cordova-plugin-3dtouch.ThreeDeeTouch",
    "file": "plugins/cordova-plugin-3dtouch/www/ThreeDeeTouch.js",
    "pluginId": "cordova-plugin-3dtouch",
    "clobbers": [
      "ThreeDeeTouch"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-add-swift-support": "1.7.2",
  "cordova-plugin-qrscanner": "2.6.0",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-3dtouch": "1.3.5"
};
// BOTTOM OF METADATA
});