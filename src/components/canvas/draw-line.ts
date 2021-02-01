import { Position } from './position';

export const drawLine = (cx: CanvasRenderingContext2D, [prev, next]: Position[]): void => {
  cx.beginPath();

  cx.moveTo(prev.x, prev.y);
  cx.lineTo(next.x, next.y);
  cx.stroke();
};
