import SkiaCanvasWidget from '../widgets/skia-canvas';
import PixiCanvasWidget from '../widgets/pixi-canvas';
import './app.css';

const App = async () => {
  const canvasContainer = document.createElement('div');
  canvasContainer.className = 'canvas-container';
  const skiaContainer = document.createElement('div');
  skiaContainer.className = 'canvas-container__skia';
  const pixiContainer = document.createElement('div');
  pixiContainer.className = 'canvas-container__pixi';
  canvasContainer.appendChild(skiaContainer);
  canvasContainer.appendChild(pixiContainer);
  const skiaWidget = new SkiaCanvasWidget(skiaContainer);
  await skiaWidget.init();
  const pixiWidget = new PixiCanvasWidget(pixiContainer);
  await pixiWidget.init();
  return canvasContainer;
};

export default App;
