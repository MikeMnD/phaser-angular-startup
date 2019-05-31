import {Component} from '@angular/core';
import GameConfig = Phaser.Types.Core.GameConfig;

import Game = Phaser.Game;
import {SampleScene} from './game/scenes/samples/sample-scene';
import {SampleScene2} from './game/scenes/samples/sample-scene2';
import {SampleScene3} from './game/scenes/samples/sample-scene3';
import SceneFileConfig = Phaser.Types.Loader.FileTypes.SceneFileConfig;

/**
 * Application component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public title = 'Chokiti';
  private game: Game;

  /**
   * Game configuration.
   */
  public gameConfig: GameConfig;

  /**
   * Instantiate application component.
   */
  public constructor() {

    this.gameConfig = {
      title: 'Chokiti',
      version: '0.0.1',
      type: Phaser.AUTO,
      width: 960,
      height: 640,
      parent: 'game-holder',
      scene: [
        new SampleScene,
        new SampleScene2,
        // new SampleScene3, // you can add dynamic scenes base only on their class name ;)
      ],
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
          gravity: {y: 300}
        }
      }
    };

    // You can initialize it without a component in the html template
    this.game = new Game(this.gameConfig);

  }

  switchScene() {
    const currentSceneName = this.game.scene.getScenes()[0].sys.config['key'];
    console.log(currentSceneName);
    const nextSceneName = currentSceneName === 'SampleScene' ? 'SampleScene2' : 'SampleScene';
    this.game.scene.switch(currentSceneName, nextSceneName);
  }

  changeScene(sceneName: string) {
    const newScene: Phaser.Scene = new DynamicClass(sceneName);
    if (!this.game.scene.getScene(sceneName)) {
      this.game.scene.add(sceneName, newScene, false);
    }
    this.game.scene.start(sceneName);
    console.log(this.game.scene.getScenes(false));
  }

}

export class DynamicClass extends Phaser.Scene {
  constructor(className: string, config?: SceneFileConfig, opts?: any) {
    super(config);
    if (Store[className] === undefined || Store[className] === null) {
      throw new Error(`Scene Class type of \'${className}\' is not in the store`);
    }
    const instance: Phaser.Scene = new Store[className](opts);
    return instance;
  }
}

export const Store: any = {
  SampleScene,
  SampleScene2,
  SampleScene3
};
