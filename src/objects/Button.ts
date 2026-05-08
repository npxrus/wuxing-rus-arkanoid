import Phaser from "phaser";

export class Button {
  private container: Phaser.GameObjects.Container;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    text: string,
    callback: () => void,
    width: number = 200,
    height: number = 70,
  ) {
    const bg = scene.add
      .rectangle(0, 0, width, height, 0x3a2e1e, 0.9)
      .setStrokeStyle(2, 0xc9a84c);
    const label = scene.add
      .text(0, 0, text, {
        fontFamily: "serif",
        fontSize: "28px",
        color: "#c9a84c",
      })
      .setOrigin(0.5);

    this.container = scene.add.container(x, y, [bg, label]);
    this.container.setSize(width, height);
    this.container.setInteractive({ cursor: "pointer" });

    this.container.on("pointerover", () => {
      bg.setFillStyle(0x4a3826, 1);
      label.setColor("#f0e3b0");
    });

    this.container.on("pointerout", () => {
      bg.setFillStyle(0x3a2e1e, 0.9);
      label.setColor("#c9a84c");
    });

    this.container.on("pointerdown", () => {
      callback();
    });
  }

  setPosition(x: number, y: number): void {
    this.container.setPosition(x, y);
  }

  destroy(): void {
    this.container.destroy();
  }
}
