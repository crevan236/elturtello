import { Injectable } from "@angular/core";
import { Command, CommandType } from "../../command-bus/command";
import { PlaygroundEntity } from "../entities/playground-entity";

@Injectable({ providedIn: 'root' })
export class CommandResolver {
  resolveCommand(command: Command, entity: PlaygroundEntity) {
    const payload = (command.payload as number[]);

    switch (command.type) {
      case CommandType.center:
        entity.center();
        break;
      case CommandType.restart:
        entity.reset();
        break;
      case CommandType.go: {
        const [x, y] = payload;
        entity.go(x, y);
        break;
      }
      case CommandType.gox: {
        const [ x ] = payload;
        entity.gox(x);
        break;
      }
      case CommandType.goy: {
        const [ y ] = payload;
        entity.goy(y);
        break;
      }
      case CommandType.direction: {
        const [ deg ] = payload;
        entity.direction(deg);
        break;
      }
      case CommandType.turnleft: {
        const [ deg ] = payload;
        entity.turnLeft(deg);
        break;
      }
      case CommandType.turnright: {
        const [ deg ] = payload;
        entity.turnRight(deg);
        break;
      }
      case CommandType.penup: {
        entity.penUp();
        break;
      }
      case CommandType.pendown: {
        entity.penDown();
        break;
      }
      case CommandType.penwidth: {
        const [ width ] = payload;
        entity.setPenWidth(width);
        break;
      }
      case CommandType.pencolor: {
        entity.setPenColor(payload);
        break;
      }
      case CommandType.forward: {
        const [ distance ] = payload;
        entity.forward(distance);
        break;
      }
      case CommandType.backward: {
        const [ distance ] = payload;
        entity.backward(distance);
        break;
      }
      case CommandType.finish: {
        entity.finishSequence();
        break;
      }
    }
  }
}