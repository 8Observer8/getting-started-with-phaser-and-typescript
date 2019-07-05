requirejs.config({
    baseUrl: "js",
    paths: {
        "Phaser": "https://cdnjs.cloudflare.com/ajax/libs/phaser/3.18.1/phaser.min",
    }
});
requirejs(["Program"], function (Program) { });
