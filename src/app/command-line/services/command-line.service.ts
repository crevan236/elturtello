import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { commandMap } from 'src/app/command-bus/command-map';
import { Finish, Restart } from 'src/app/command-bus/commands';
import { Command, CommandType } from '../../command-bus/command';
import { CommandService } from '../../command-bus/command.service';

@Injectable({
  providedIn: 'root',
})
export class CommandLineService {
  errors = new Subject<string>();

  constructor(private readonly commandBus: CommandService) {}

  get errors$() {
    return this.errors.asObservable();
  }

  interpretCommands(input: string) {
    this.clearErrors();
    const commands = this.divideCommands(input);

    this.commandBus.dispatch(new Restart());

    for (const stringCommand of commands) {
      const trimmedcommand = stringCommand.trim();

      if (!trimmedcommand.length) {
        continue;
      }

      const [type, params] = this.separateCommand(trimmedcommand);
      const command = this.createCommand(type, params);

      this.commandBus.dispatch(command as Command);
    }

    this.commandBus.dispatch(new Finish());
  }

  private divideCommands(input: string): string[] {
    return input.split('\n');
  }

  private separateCommand(command: string): [CommandType, number[]] {
    const [type, ...args] = command.split(' ');

    return [type as CommandType, args.map((param) => Number(param))];
  }

  private createCommand(type: CommandType, params: number[]): Command | void {
    try {
      return new commandMap[type](params);
    } catch (e) {
      this.errors.next(`Command ${type} doesn't exist`);
    }
  }

  private clearErrors() {
    this.errors.next('');
  }
}
