export enum CommandType {
  forward = 'forward',
  backward = 'backward',
  turnleft = 'turnleft',
  turnright = 'turnright',
  direction = 'direction',
  center = 'center',
  go = 'go',
  gox = 'gox',
  goy = 'goy',
  penup = 'penup',
  pendown = 'pendown',
  penwidth = 'penwidth',
  pencolor = 'pencolor',
  restart = 'restart',
  finish = 'finish',
}

export interface Command {
  type: CommandType;
  payload?: number[];
}
