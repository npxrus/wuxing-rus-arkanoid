import Phaser from "phaser";

class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  create(): void {
    this.add
      .text(
        this.scale.width / 2,
        this.scale.height / 2,
        "Царство Пяти Начал\nЗагрузка...",
        { color: "#ffffff", fontSize: "32px", align: "center" },
      )
      .setOrigin(0.5);
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 390,
  height: 844,
  backgroundColor: "#1a1a2e",
  parent: "game",
  scene: [BootScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

new Phaser.Game(config);
