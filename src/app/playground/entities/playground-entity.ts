import {
  CENTER_DIVIDER,
  DEFAULT_DEG,
  DINO_SIZE,
  FULL_CIRCLE_DEG,
  HALF_CIRCLE_DEG,
  HALF_DINO,
  REVERT_DIR,
} from '../consts';
import { PlaygroundEntityState } from '../interfaces/playground-entity-state';
import { sin, cos } from '../math/math-helpers';

export class PlaygroundEntity {
  private state: PlaygroundEntityState;
  private ctx: CanvasRenderingContext2D;

  constructor(state: PlaygroundEntityState, context: CanvasRenderingContext2D) {
    this.state = state;
    this.ctx = context;

    const { width, height } = this.state.playgroundSize;
    this.ctx.translate(width / CENTER_DIVIDER, height / CENTER_DIVIDER);

    this.state.image.onload = () => {
      this.createTurtle();
    };
  }

  private createTurtle() {
    // actually this should turn to the current direction
    // but decided not to implement that
    const { x, y } = this.state;

    this.ctx.drawImage(
      this.state.image,
      x - HALF_DINO,
      y - HALF_DINO,
      DINO_SIZE,
      DINO_SIZE
    );
  }

  private clearCanvas() {
    const { width, height } = this.ctx.canvas;
    // TODO: change this to clearRect() for performance
    this.ctx.canvas.width += 0;
    this.ctx.translate(width / CENTER_DIVIDER, height / CENTER_DIVIDER);
  }

  reset() {
    this.clearCanvas();
    this.setPenWidth(this.state.penWidth);
    this.setPenColor(this.state.color);
    this.go(0, 0);
    this.state.on = true;
    this.state.degrees = DEFAULT_DEG;
  }

  finishSequence() {
    this.createTurtle();
  }

  forward(distance: number) {
    const x = Math.round(this.state.x + distance * cos(this.state.degrees));
    const y = Math.round(this.state.y + distance * sin(this.state.degrees));

    this.state.x = x;
    this.state.y = y;

    if (this.state.on) {
      this.ctx.lineTo(x, y);
      this.ctx.stroke();

      return;
    }

    this.ctx.moveTo(x, y);
  }

  backward(distance: number) {
    const x = Math.round(this.state.x + distance * cos(this.state.degrees + HALF_CIRCLE_DEG));
    const y = Math.round(this.state.y + distance * sin(this.state.degrees + HALF_CIRCLE_DEG));

    this.state.x = x;
    this.state.y = y;

    if (this.state.on) {
      this.ctx.lineTo(x, y);
      this.ctx.stroke();

      return;
    }

    this.ctx.moveTo(x, y);
  }

  turnRight(deg: number) {
    if (this.state.degrees + deg > FULL_CIRCLE_DEG) {
      this.state.degrees = this.state.degrees + deg - FULL_CIRCLE_DEG;

      return;
    }

    this.state.degrees += deg;
  }

  turnLeft(deg: number) {
    if (this.state.degrees - deg < 0) {
      this.state.degrees = FULL_CIRCLE_DEG + this.state.degrees - deg;

      return;
    }
    this.state.degrees -= deg;
  }

  direction(deg: number) {
    if (DEFAULT_DEG + deg > FULL_CIRCLE_DEG) {
      this.state.degrees = DEFAULT_DEG + deg - FULL_CIRCLE_DEG;
    } else {
      this.state.degrees = DEFAULT_DEG + deg;
    }
  }

  center() {
    this.ctx.moveTo(0, 0);
  }

  go(x: number, y: number) {
    this.state.x = x;
    this.state.y = y * REVERT_DIR;
    this.ctx.moveTo(this.state.x, this.state.y);
  }

  gox(x: number) {
    this.go(x, this.state.y);
  }

  goy(y: number) {
    this.go(this.state.x, y);
  }

  penUp() {
    this.state.on = false;
  }

  penDown() {
    this.state.on = true;
  }

  setPenWidth(width: number) {
    // changing pen width & color will only work for separate shapes
    this.ctx.beginPath();
    this.state.penWidth = width;
    this.ctx.lineWidth = width;
  }

  setPenColor(color: number[]) {
    this.ctx.beginPath();
    this.state.color = color;
    const [red, green, blue] = color;

    this.ctx.strokeStyle = `rgb(${red}, ${green}, ${blue})`;
  }
}
