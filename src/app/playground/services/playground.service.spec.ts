import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Restart } from 'src/app/command-bus/commands';
import { CommandService } from '../../command-bus/command.service';
import { CommandResolver } from '../command-resolver/command-resolver';
import { ENTITY_INITIAL_STATE } from '../consts';
import { PlaygroundEntity } from '../entities/playground-entity';
import { PlaygroundSize } from '../interfaces/playground-size';
import { PlaygroundService } from './playground.service';

describe('PlaygroundService', () => {
  let service: PlaygroundService;
  let resolver: CommandResolver;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PlaygroundService,
      {
        provide: CommandService,
        useValue: {
          commandStream$: of(new Restart()),
        },
      },
      {
        provide: CommandResolver,
        useValue: {
          resolveCommand: () => {},
        },
      }
    ],
  }));

  beforeEach(() => {
    service = TestBed.inject(PlaygroundService);
    resolver = TestBed.inject(CommandResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initialize', () => {
    it('should create entity & subscribe for commands', () => {
      const spy = spyOn(resolver, 'resolveCommand');
      const ctx = {
        context: {
          width: 200,
          height: 200,
        },
        translate: () => {},
        lineTo: () => {},
        stroke: () => {},
        moveTo: () => {},
      } as any;
      const playgroundSize: PlaygroundSize = {
        width: 200,
        height: 150,
      };

      service.initialize(ctx, playgroundSize, { onload: null } as any);

      expect(spy).toHaveBeenCalled();
    });
  });
});
