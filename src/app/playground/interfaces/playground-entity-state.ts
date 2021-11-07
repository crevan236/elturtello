import { PlaygroundSize } from './playground-size';

export interface PlaygroundEntityState {
  playgroundSize: PlaygroundSize;
  x: number;
  y: number;
  on: boolean;
  color: number[];
  degrees: number;
  penWidth: number;
  image: HTMLImageElement;
}
