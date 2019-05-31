export class SampleScene2 extends Phaser.Scene {

  private background: Phaser.GameObjects.Image;
  private logo: Phaser.Physics.Arcade.Image;

  constructor() {
    super({
      key: 'SampleScene2'
    });
  }

  preload() {
    this.load.image('sky', '/assets/sample-scene2/space3.png');
    this.load.image('logo', '/assets/sample-scene2/phaser3-logo.png');
    this.load.image('red', '/assets/sample-scene2/red.png');
  }

  create() {

    const width = this.game.canvas.width;
    const height = this.game.canvas.height;

    console.log(width, height);

    this.background = this.add.image(0, 0, 'sky').setOrigin(0.5);
    this.background.setPosition(width / 2, height / 2).setDisplaySize(width, height);

    this.logo = this.physics.add.image(width / 2, height / 2, 'logo').setOrigin(0.5);
    Phaser.Display.Align.In.Center(this.logo, this.background);

    const amplitude = 100;
    this.tweens.add({
      targets: this.logo,
      y: {
        value: {
          getEnd: function (target, key, value) {
            return height / 2 - amplitude;
          },
          getStart: function (target, key, value) {
            return height / 2 + amplitude;
          }

        }
      },
      duration: 1500,
      ease: 'Sine.easeInOut',
      repeat: -1,
      yoyo: true
    });
    this.logo.setVelocity(100, 0);
    this.logo.setBounce(1, 1);
    this.logo.setCollideWorldBounds(true);
    this.logo.setDepth(1);

    const particles = this.add.particles('red');

    for (let i = 0; i < this.logo.width / 2; i = i + 50) {
      const emitter1 = particles.createEmitter({
        speed: 100,
        scale: {start: 1, end: 0},
        blendMode: 'ADD'
      });
      emitter1.startFollow(this.logo, i);
      const emitter2 = particles.createEmitter({
        speed: 100,
        scale: {start: 1, end: 0},
        blendMode: 'ADD'
      });
      emitter2.startFollow(this.logo, -i);
    }

  }

}
