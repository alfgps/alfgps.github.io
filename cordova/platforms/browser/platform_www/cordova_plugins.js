cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.peerio.cordova.plugin.splashscreen/www/splashscreen.js",
        "id": "com.peerio.cordova.plugin.splashscreen.SplashScreen",
        "pluginId": "com.peerio.cordova.plugin.splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/com.peerio.cordova.plugin.splashscreen/src/browser/SplashScreenProxy.js",
        "id": "com.peerio.cordova.plugin.splashscreen.SplashScreenProxy",
        "pluginId": "com.peerio.cordova.plugin.splashscreen",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.peerio.cordova.plugin.splashscreen": "3.2.4",
    "cordova-plugin-whitelist": "1.2.1"
}
// BOTTOM OF METADATA
});