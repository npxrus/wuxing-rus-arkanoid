import Phaser from "phaser";
import { Button } from "../objects/Button";

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "MenuScene" });
  }

  preload(): void {
    this.load.image("menu-bg", "assets/images/menu-bg.png");
  }

  create(): void {
    const { width, height } = this.scale;

    const bg = this.add.image(width / 2, height / 2, "menu-bg");
    bg.setDisplaySize(width, height);

    const overlay = this.add.rectangle(
      width / 2,
      height / 2,
      width,
      height,
      0x000000,
      0.3,
    );

    this.add
      .text(width / 2, height * 0.25, "Царство\nПяти Начал", {
        fontFamily: "serif",
        fontSize: "48px",
        color: "#ffd700",
        align: "center",
        lineSpacing: 8,
        stroke: "#000000",
        strokeThickness: 4,
      })
      .setOrigin(0.5);

    new Button(this, width / 2, height * 0.75, "ИГРАТЬ", () => {
      this.scene.start("GameScene");
    });

    new Button(this, width / 2, height * 0.83, "ОБ ИГРЕ", () => {
    });
  }
}
