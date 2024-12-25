import * as PIXI from 'pixi.js-legacy';

class PixiCanvasWidget {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  init() {
    const app = new PIXI.Application<HTMLCanvasElement>({
      width: 600,
      height: 600,
      forceCanvas: true,
    });

    this.container.appendChild(app.view);

    const mainContainer = new PIXI.Container();
    const g1 = new PIXI.Graphics();
    g1.beginFill('#ff0000').drawEllipse(0, 0, 200, 100).endFill();
    g1.position.set(200, 100);
    g1.angle = 30;
    g1.on('pointerdown', () => {
      console.log('g1 pointerdown!');
    });

    mainContainer.addChild(g1);
    app.stage.addChild(mainContainer);
  }
}

export default PixiCanvasWidget;
