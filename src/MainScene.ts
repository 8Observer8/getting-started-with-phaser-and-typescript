
import * as Phaser from "Phaser";

export class MainScene extends Phaser.Scene
{
    private _sprite: Phaser.GameObjects.Sprite;

    public constructor()
    {
        super({ key: "MainScene" });
    }

    protected preload(): void
    {
        // Load the image
        this.load.image("logo", "https://phaser.io/images/logo/logo-download.png");
    }

    protected create(): void
    {
        // Display the image on the screen
        this._sprite = this.add.sprite(128, 128, "logo");
    }

    public update(): void
    {
        // Increment the angle of the sprite by 1, 60 times per seconds
        this._sprite.angle += 1;
    }
}