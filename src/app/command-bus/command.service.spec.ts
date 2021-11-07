import { TestBed } from '@angular/core/testing';
import { CommandService } from './command.service';
import { Center } from './commands';

describe('CommandService', () => {
  let service: CommandService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [CommandService],
  }));

  beforeEach(() => {
    service = TestBed.inject(CommandService);
  });

  it('should be created', () => { 
    expect(service).toBeTruthy();
  });

  describe('dispatch', () => {
    it('should dispatch a command', async () => {
      const command = new Center();

      service.commandStream$.subscribe(result => {
        expect(result).toEqual(new Center());
      });

      service.dispatch(command);
    });
  });
});
