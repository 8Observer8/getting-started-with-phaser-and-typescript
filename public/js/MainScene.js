var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "Phaser"], function (require, exports, Phaser) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MainScene = /** @class */ (function (_super) {
        __extends(MainScene, _super);
        function MainScene() {
            return _super.call(this, { key: "MainScene" }) || this;
        }
        MainScene.prototype.preload = function () {
            // Load the image
            this.load.image("logo", "https://phaser.io/images/logo/logo-download.png");
        };
        MainScene.prototype.create = function () {
            // Display the image on the screen
            this._sprite = this.add.sprite(128, 128, "logo");
        };
        MainScene.prototype.update = function () {
            // Increment the angle of the sprite by 1, 60 times per seconds
            this._sprite.angle += 1;
        };
        return MainScene;
    }(Phaser.Scene));
    exports.MainScene = MainScene;
});
