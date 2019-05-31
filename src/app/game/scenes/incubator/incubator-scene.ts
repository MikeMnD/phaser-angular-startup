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

    // const particles = this.add.particles('red');
    // const emitter = particles.createEmitter({
    //   speed: 100,
    //   scale: {start: 1, end: 0},
    //   blendMode: 'ADD'
    // });

    this.logo = this.physics.add.image(width / 2, height / 2, 'logo').setOrigin(0.5);
    const amplitude = 100
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

    Phaser.Display.Align.In.Center(this.logo, this.background);
    // this.logo.setPosition(width / 2, height / 2);

    // Phaser.Display.Align.In.Center(this.background, this.add.zone(
    //   this.game.canvas.width / 2,
    //   this.game.canvas.height / 2,
    //   this.game.canvas.width,
    //   this.game.canvas.height)
    // );
    //
    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);
    // emitter.startFollow(logo);
  }
}
