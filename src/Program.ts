
import * as Phaser from "Phaser";
import { Game } from "./Game";
import { MainScene } from "./MainScene";

// Playground: https://next.plnkr.co/edit/NmyeEqvkRV25hYxD?preview

class Program
{
    public static Main(): void
    {
        // console.log(Phaser.VERSION);

        const config: Phaser.Types.Core.GameConfig = {
            title: "Getting Started with TypeScript and Phaser",
            width: 256, height: 256,
            type: Phaser.AUTO,
            scene: [ MainScene ]
        }

        let game = new Game(config);
    }
}

// Debug Version
Program.Main();

// Release Version
// window.onload = () => Program.Main();
