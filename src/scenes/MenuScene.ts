import Phaser from "phaser";

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

    const buttonBg = this.add
      .rectangle(0, 0, 200, 70, 0x3a2e1e, 0.9)
      .setStrokeStyle(2, 0xc9a84c);
    const buttonText = this.add
      .text(0, 0, "ИГРАТЬ", {
        fontFamily: "serif",
        fontSize: "28px",
        color: "#c9a84c",
      })
      .setOrigin(0.5);
    const buttonContainer = this.add.container(width / 2, height * 0.75, [
      buttonBg,
      buttonText,
    ]);
    buttonContainer.setSize(200, 70);
    buttonContainer.setInteractive({ cursor: "pointer" });
    buttonContainer.on("pointerover", () => {
      buttonBg.setFillStyle(0x4a3826, 1);
      buttonText.setColor("#f0e3b0");
    });
    buttonContainer.on("pointerout", () => {
      buttonBg.setFillStyle(0x3a2e1e, 0.9);
      buttonText.setColor("#c9a84c");
    });
    buttonContainer.on("pointerdown", () => {
      this.scene.start("GameScene");
    });

    const aboutBtnBg = this.add
      .rectangle(0, 0, 200, 70, 0x3a2e1e, 0.9)
      .setStrokeStyle(2, 0xc9a84c);
    const aboutBtnText = this.add
      .text(0, 0, "ОБ ИГРЕ", {
        fontFamily: "serif",
        fontSize: "28px",
        color: "#c9a84c",
      })
      .setOrigin(0.5);
    const aboutBtnContainer = this.add.container(width / 2, height * 0.85, [
      aboutBtnBg,
      aboutBtnText,
    ]);
    aboutBtnContainer.setSize(200, 70);
    aboutBtnContainer.setInteractive({ cursor: "pointer" });
    aboutBtnContainer.on("pointerover", () => {
      aboutBtnBg.setFillStyle(0x4a3826, 1);
      aboutBtnText.setColor("#f0e3b0");
    });
    aboutBtnContainer.on("pointerout", () => {
      aboutBtnBg.setFillStyle(0x3a2e1e, 0.9);
      aboutBtnText.setColor("#c9a84c");
    });
  }
}
