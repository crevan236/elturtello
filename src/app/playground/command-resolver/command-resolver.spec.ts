import { TestBed } from '@angular/core/testing';
import {
  Center,
  Restart,
  PenDown,
  PenUp,
  PenColor,
  PenWidth,
  Forward,
  Backward,
  Direction,
  TurnLeft,
  TurnRight,
  Go,
  GoX,
  GoY,
  Finish,
} from '../../command-bus/commands';
import { CommandResolver } from '../command-resolver/command-resolver';

describe('CommandResolver', () => {
  let service: CommandResolver;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CommandResolver,
    ],
  }));

  beforeEach(() => {
    service = TestBed.inject(CommandResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('resolveCommand', () => {
    it('should resolve Center command', () => {
      const command = new Center()
      const entity = {
        center: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.center).toHaveBeenCalled();
    });

    it('should resolve Finish command', () => {
      const command = new Finish()
      const entity = {
        finishSequence: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.finishSequence).toHaveBeenCalled();
    });

    it('should resolve Restart command', () => {
      const command = new Restart()
      const entity = {
        reset: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.reset).toHaveBeenCalled();
    });

    it('should resolve PenUp command', () => {
      const command = new PenUp()
      const entity = {
        penUp: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.penUp).toHaveBeenCalled();
    });

    it('should resolve PenDown command', () => {
      const command = new PenDown()
      const entity = {
        penDown: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.penDown).toHaveBeenCalled();
    });

    it('should resolve PenColor command', () => {
      const command = new PenColor([1, 1, 125])
      const entity = {
        setPenColor: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.setPenColor).toHaveBeenCalledWith([1, 1, 125]);
    });

    it('should resolve PenWidth command', () => {
      const command = new PenWidth([12])
      const entity = {
        setPenWidth: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.setPenWidth).toHaveBeenCalledWith(12);
    });

    it('should resolve Forward command', () => {
      const command = new Forward([100])
      const entity = {
        forward: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.forward).toHaveBeenCalledWith(100);
    });

    it('should resolve Backward command', () => {
      const command = new Backward([100])
      const entity = {
        backward: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.backward).toHaveBeenCalledWith(100);
    });

    it('should resolve Direction command', () => {
      const command = new Direction([44])
      const entity = {
        direction: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.direction).toHaveBeenCalledWith(44);
    });

    it('should resolve TurnLeft command', () => {
      const command = new TurnLeft([22])
      const entity = {
        turnLeft: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.turnLeft).toHaveBeenCalledWith(22);
    });

    it('should resolve TurnRight command', () => {
      const command = new TurnRight([22])
      const entity = {
        turnRight: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.turnRight).toHaveBeenCalledWith(22);
    });

    it('should resolve Go command', () => {
      const command = new Go([22, 12])
      const entity = {
        go: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.go).toHaveBeenCalledWith(22, 12);
    });

    it('should resolve GoX command', () => {
      const command = new GoX([12])
      const entity = {
        gox: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.gox).toHaveBeenCalledWith(12);
    });

    it('should resolve GoY command', () => {
      const command = new GoY([12])
      const entity = {
        goy: jasmine.createSpy(),
      } as any;

      service.resolveCommand(command, entity);

      expect(entity.goy).toHaveBeenCalledWith(12);
    });
  });
});
