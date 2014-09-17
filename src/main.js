define(function(require, exports, module) {
    // load non-js resources (css, index.html)
    require('./resources');

    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Utility = require('famous/utilities/Utility');

    var AppView = require('./views/AppView');
    var SlideData = require('./data/SlideData');

    // create the main context
    var mainContext = Engine.createContext();
    mainContext.setPerspective(1000);

    var contextSize;
    Engine.nextTick(function(){
        contextSize = mainContext.getSize();
        Utility.loadURL(SlideData.getUrl(), initApp);
    });

    function initApp(data) {
        data = SlideData.parse(data);

        var appView = new AppView({ data : data, cameraWidth: 0.5 * contextSize[1] });

        mainContext.add(appView);
    }

    /**
     * Support for multiple configurations using the global ENV variable.
     *
     * Set the variable in webpack.config.js, or with the --env=XXXX flag.
     */
    if(ENV === "production") {
        console.log("Hooray! This is the production environment. You can use different settings!");
    } else {
        console.log("You're running in the "+ENV+" environment. Try \"webpack --env=production\".");
    }

    /**
     * Support for Cordova
     */
//    document.addEventListener("deviceready", function(){
//        // Add the cordova.js script tag to your HTML to load cordova.
//        //
//        //  <script type="text/javascript" src="cordova.js"></script>
//        console.log('Cordova loaded succesfully - Device Ready!');
//    }, false);
});
