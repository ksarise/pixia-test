import './style.css';
import * as PIXI from 'pixi.js-legacy';

const ROOT = document.querySelector<HTMLDivElement>('#root')!;
const app = new PIXI.Application<HTMLCanvasElement>({
  width: 800,
  height: 800,
  forceCanvas: true,
});
ROOT.appendChild(app.view);
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
