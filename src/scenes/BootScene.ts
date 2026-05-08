import Phaser from "phaser";

export class BootScene extends Phaser.Scene {
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
