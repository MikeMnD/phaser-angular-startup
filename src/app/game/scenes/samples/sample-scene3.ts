import * as dat from 'dat.gui';

export class SampleScene3 extends Phaser.Scene {

  private background: Phaser.GameObjects.Image;
  private logo: Phaser.Physics.Arcade.Image;
  private gui: dat.GUI;
  private gui_folder: any;

  constructor() {
    super({
      key: 'SampleScene3'
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

    this.logo.setVelocity(100, 200);
    this.logo.setBounce(1, 1);
    this.logo.setCollideWorldBounds(true);

    const particles = this.add.particles('red');
    const emitter = particles.createEmitter({
      speed: 100,
      scale: {start: 1, end: 0},
      blendMode: 'ADD'
    });
    emitter.startFollow(this.logo);

    this.createBodyGui(this.logo.body);

    this.events.on('shutdown', (item) => {
      console.log('item', item);
      this.onSceneShutdown();
    }, 'kur');

  }

  createBodyGui(body) {
    this.gui = new dat.GUI({width: 400});

    this.gui.add(body, 'allowDrag');
    this.gui.add(body, 'allowGravity');
    this.gui.add(body, 'allowRotation');
    this.gui.add(body, 'angularAcceleration', -360, 360, 5);
    this.gui.add(body, 'angularVelocity', -360, 360, 5);
    this.gui.add(body, 'collideWorldBounds');
    this.gui.add(body, 'debugShowBody');
    this.gui.add(body, 'debugShowVelocity');
    this.gui.add(body, 'enable');
    this.gui.add(body, 'immovable');
    this.gui.add(body, 'isCircle');
    this.gui.add(body, 'mass', 0.1, 10, 0.1);
    this.gui.add(body, 'moves');
    this.gui.add(body, 'useDamping');
    this.gui.addColor(body, 'debugBodyColor');

    this.createVectorGui('acceleration', body.acceleration, -600, 600, 10);
    this.createVectorGui('bounce', body.bounce, 0, 1, 0.1);
    this.createVectorGui('deltaMax', body.deltaMax, 0, 60, 1);
    this.createVectorGui('drag', body.drag, 0, 60, 0.1);
    this.createVectorGui('friction', body.friction, 0, 1, 0.05);
    this.createVectorGui('gravity', body.gravity, -600, 600, 10);
    this.createVectorGui('maxVelocity', body.maxVelocity, 0, 10000, 100);
    this.createVectorGui('velocity', body.velocity, -600, 600, 10);

    const check = this.gui.addFolder('checkCollision');
    check.add(body.checkCollision, 'left');
    check.add(body.checkCollision, 'up');
    check.add(body.checkCollision, 'right');
    check.add(body.checkCollision, 'down');

  }

  createVectorGui(name, vector, min, max, step) {
    this.gui_folder = this.gui.addFolder(name);
    this.gui_folder.add(vector, 'x', min, max, step);
    this.gui_folder.add(vector, 'y', min, max, step);
  }

  onSceneShutdown() {
    this.gui.destroy();
    console.log('onSceneShutdown');
  }

}
