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
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/windows/NetworkInfoProxy.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "com.peerio.cordova.plugin.splashscreen": "3.2.4",
    "cordova-plugin-network-information": "1.2.0"
};
// BOTTOM OF METADATA
});