define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var ContainerSurface = require('famous/surfaces/ContainerSurface');

    var SlideshowView = require('./SlideshowView');

    function AppView() {
        View.apply(this, arguments);

        this.options.cameraWidth = this.options.cameraWidth || 400;

        this.options.slideWidth = 0.8 * this.options.cameraWidth;
        this.options.slideHeight = this.options.slideWidth + 40;
        this.options.slidePosition = 0.77 * this.options.cameraWidth;

        _createCamera.call(this);

    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {
        data: undefined,
        cameraWidth: undefined
    };

    function _createCamera() {
        var camera = new ImageSurface({
            size: [this.options.cameraWidth, true],
            content: require('../images/camera.png'),
            properties: {
                width: '100%'
            }
        });

        var cameraModifier = new StateModifier({
            origin: [0.5, 0],
            align: [0.5, 0],
            transform: Transform.behind
        });

        this.add(cameraModifier).add(camera);
        camera.on('deploy', function(){
            _createSlideshow.call(this);
        }.bind(this));
    }

    function _createSlideshow() {
        var slideshowView = new SlideshowView({
            size: [this.options.slideWidth, this.options.slideHeight],
            data: this.options.data
        });

        var slideshowModifier = new StateModifier({
            origin: [0.5, 0],
            align: [0.5, 0],
            transform: Transform.translate(0, this.options.slidePosition, 0)
        });

        var slideshowContainer = new ContainerSurface({
            properties: {
                overflow: 'hidden'
            }
        });

        this.add(slideshowModifier).add(slideshowContainer);
        slideshowContainer.add(slideshowView);
        slideshowContainer.context.setPerspective(1000);
    }

    module.exports = AppView;
});
