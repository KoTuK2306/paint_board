import { RootState } from 'store';

export const selectColor = ({ canvasReducer: { color } }: RootState): string => color;
