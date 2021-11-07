import { TestBed } from '@angular/core/testing';
import { CommandService } from 'src/app/command-bus/command.service';
import { CommandLineService } from './command-line.service';

describe('CommandLineService', () => {
  let service: CommandLineService;
  let commandBus: CommandService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CommandLineService,
      {
        provide: CommandService,
        useValue: {
          dispatch: () => {},
        },
      }
    ],
  }));

  beforeEach(() => {
    service = TestBed.inject(CommandLineService);
    commandBus = TestBed.inject(CommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('interpretCommands', () => {
    it('should interpret set of commands', () => {
      const spy = spyOn(commandBus, 'dispatch');
      const commands = `
        pencolor 204 51 255
        penwidth 30
        go 0 -50
        goy 50
        gox 21
        turnleft 90
        forward 50

        turnright 30
        backward 100
        center
        penup
        pendown
        direction 20
      `;

      service.interpretCommands(commands);

      expect(spy).toHaveBeenCalledTimes(15);
    });
  });
});
