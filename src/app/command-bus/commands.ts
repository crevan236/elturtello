import { Command, CommandType } from './command';
import { InvalidArgumentsException } from './invalid-arguments.exception';

export class Restart implements Command {
  type = CommandType.restart;
}

export class Center implements Command {
  type = CommandType.center;
}

export class PenUp implements Command {
  type = CommandType.penup;
}

export class PenDown implements Command {
  type = CommandType.pendown;
}

export class Finish implements Command {
  type = CommandType.finish;
}

export class Direction implements Command {
  type = CommandType.direction;
  payload: number[];
  constructor(args: number[]) {
    if (args.length !== 1 || !Number.isInteger(args[0])) {
      throw new InvalidArgumentsException();
    }

    this.payload = args;
  }
}

export class Forward implements Command {
  type = CommandType.forward;
  payload: number[];

  constructor(args: number[]) {
    if (args.length !== 1 || !Number.isInteger(args[0])) {
      throw new InvalidArgumentsException();
    }

    this.payload = args;
  }
}

export class Backward implements Command {
  type = CommandType.backward;
  payload: number[];

  constructor(args: number[]) {
    if (args.length !== 1 || !Number.isInteger(args[0])) {
      throw new InvalidArgumentsException();
    }

    this.payload = args;
  }
}

export class TurnLeft implements Command {
  type = CommandType.turnleft;
  payload: number[];

  constructor(args: number[]) {
    if (args.length !== 1 || !Number.isInteger(args[0])) {
      throw new InvalidArgumentsException();
    }

    this.payload = args;
  }
}

export class TurnRight implements Command {
  type = CommandType.turnright;
  payload: number[];

  constructor(args: number[]) {
    if (args.length !== 1 || !Number.isInteger(args[0])) {
      throw new InvalidArgumentsException();
    }

    this.payload = args;
  }
}

export class Go implements Command {
  type = CommandType.go;
  payload: number[];

  constructor(args: number[]) {
    if (
      args.length !== 2 ||
      !Number.isInteger(args[0]) ||
      !Number.isInteger(args[1])
    ) {
      throw new InvalidArgumentsException();
    }

    this.payload = args;
  }
}

export class GoX implements Command {
  type = CommandType.gox;
  payload: number[];

  constructor(args: number[]) {
    if (args.length !== 1 || !Number.isInteger(args[0])) {
      throw new InvalidArgumentsException();
    }

    this.payload = args;
  }
}

export class GoY implements Command {
  type = CommandType.goy;
  payload: number[];

  constructor(args: number[]) {
    if (args.length !== 1 || !Number.isInteger(args[0])) {
      throw new InvalidArgumentsException();
    }

    this.payload = args;
  }
}

export class PenWidth implements Command {
  type = CommandType.penwidth;
  payload: number[];

  constructor(args: number[]) {
    if (args.length !== 1 || !Number.isInteger(args[0])) {
      throw new InvalidArgumentsException();
    }

    this.payload = args;
  }
}

export class PenColor implements Command {
  type = CommandType.pencolor;
  payload: number[];

  constructor(args: number[]) {
    if (
      args.length !== 3 ||
      !Number.isInteger(args[0]) ||
      !Number.isInteger(args[1]) ||
      !Number.isInteger(args[2])
    ) {
      throw new InvalidArgumentsException();
    }

    this.payload = args;
  }
}
