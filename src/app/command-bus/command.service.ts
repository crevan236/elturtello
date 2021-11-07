import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Command } from './command';

@Injectable()
export class CommandService {
  private readonly commandStream =  new Subject<Command>();

  constructor() {
    this.commandStream$.subscribe(command => {
      console.log('###DEBUG###', command);
    });
  }

  get commandStream$() {
    return this.commandStream.asObservable().pipe(filter(command => !!command));
  }

  dispatch(command: Command) {
    this.commandStream.next(command);
  }
}
