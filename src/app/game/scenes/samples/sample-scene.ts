export class SampleScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: 'SampleScene'
    });
  }

  preload(): void {
    this.load.image('robot', '/assets/phaser.png');
  }

  create(): void {
    this.add.text(0, -150, 'Just what do you think you\'re doing, Dave?').setOrigin(0.5);
    this.phaserSprite = this.add.sprite(0, 0, 'robot').setOrigin(0.5);
    this.cameras.main.startFollow(this.phaserSprite, false);
  }
}
