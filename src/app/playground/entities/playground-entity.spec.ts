import { PlaygroundEntity } from "./playground-entity";

describe('PlaygroundEntity', () => {
  let ctx: any;

  beforeEach(() => {
    ctx = {
      translate: () => {},
      moveTo: jasmine.createSpy(),
      lineTo: jasmine.createSpy(),
      stroke: jasmine.createSpy(),
    } as any;
  });

  describe('center', () => {
    it('should call ctx.moveTo', () => {
      const state = {
        playgroundSize: {
          width: 200,
          height: 200,
        },
        image: {
          onload: () => {},
        },
      } as any;

      const entity = new PlaygroundEntity(state, ctx);

      entity.center();

      expect(ctx.moveTo).toHaveBeenCalledWith(0, 0);
    });
  });

  describe('forward', () => {
    it('should call ctx.moveTo', () => {
      const state = {
        playgroundSize: {
          width: 200,
          height: 200,
        },
        image: {
          onload: () => {},
        },
        degrees: 270,
        x: 0,
        y: 0,
        on: false,
      } as any;

      const entity = new PlaygroundEntity(state, ctx);

      entity.forward(100);

      expect(ctx.moveTo).toHaveBeenCalledWith(0, -100);
    });

    it('should call ctx.lineTo & ctx.stroke', () => {
      const state = {
        playgroundSize: {
          width: 200,
          height: 200,
        },
        image: {
          onload: () => {},
        },
        degrees: 270,
        x: 0,
        y: 0,
        on: true,
      } as any;

      const entity = new PlaygroundEntity(state, ctx);

      entity.forward(100);

      expect(ctx.lineTo).toHaveBeenCalledWith(0, -100);
      expect(ctx.stroke).toHaveBeenCalled();
    });
  });

  // etc
});
