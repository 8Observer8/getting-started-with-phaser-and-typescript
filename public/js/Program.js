define(["require", "exports", "Phaser", "./Game", "./MainScene"], function (require, exports, Phaser, Game_1, MainScene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // https://next.plnkr.co/edit/NmyeEqvkRV25hYxD?preview
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            // console.log(Phaser.VERSION);
            var config = {
                title: "Getting Started with TypeScript and Phaser",
                width: 256, height: 256,
                type: Phaser.AUTO,
                scene: [MainScene_1.MainScene]
            };
            var game = new Game_1.Game(config);
        };
        return Program;
    }());
    // Debug Version
    Program.Main();
});
// Release Version
// window.onload = () => Program.Main();
