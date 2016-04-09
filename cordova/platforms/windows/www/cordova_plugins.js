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
        "file": "plugins/com.peerio.cordova.plugin.splashscreen/www/windows/SplashScreenProxy.js",
        "id": "com.peerio.cordova.plugin.splashscreen.SplashScreenProxy",
        "pluginId": "com.peerio.cordova.plugin.splashscreen",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "com.peerio.cordova.plugin.splashscreen": "3.2.4"
};
// BOTTOM OF METADATA
});