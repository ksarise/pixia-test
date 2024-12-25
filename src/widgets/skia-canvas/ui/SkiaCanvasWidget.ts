import CanvasKitInit from 'canvaskit-wasm';

export default class SkiaCanvasWidget {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  async init() {
    const skiaCanvas = document.createElement('canvas');
    skiaCanvas.width = 600;
    skiaCanvas.height = 600;
    skiaCanvas.id = 'skia-canvas';
    skiaCanvas.style.border = '1px solid #000';
    skiaCanvas.style.backgroundColor = '#fff';
    this.container.appendChild(skiaCanvas);

    try {
      const canvasKit = await CanvasKitInit({
        locateFile: (file) => `/node_modules/canvaskit-wasm/bin/${file}`,
      });

      if (!canvasKit) {
        throw new Error('CanvasKit failed to load');
      }
      console.log('CanvasKit initialized successfully:', canvasKit);

      const surface = canvasKit.MakeSWCanvasSurface(skiaCanvas);
      if (!surface) {
        throw new Error('Failed to create Skia surface');
      }

      const paint = new canvasKit.Paint();
      paint.setColor(canvasKit.Color4f(0.9, 0, 0, 1.0));
      paint.setStyle(canvasKit.PaintStyle.Stroke);
      paint.setAntiAlias(true);

      const rr = canvasKit.RRectXY(
        canvasKit.LTRBRect(10, 60, 210, 260),
        25,
        15,
      );
      surface.drawOnce((canvas) => canvas.drawRRect(rr, paint));
      surface.flush();
    } catch (error) {
      console.error('Error initializing Skia:', error);
    }
  }
}
