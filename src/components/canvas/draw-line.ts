import { Position } from './position';

export const drawLine = (ctx: CanvasRenderingContext2D, [prev, next]: Position[], color: string): void => {
  ctx.beginPath();

  ctx.moveTo(prev.x, prev.y);
  ctx.lineTo(next.x, next.y);
  ctx.strokeStyle = color;
  ctx.stroke();
};
