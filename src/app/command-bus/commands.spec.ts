import { CommandType } from "./command";
import { Center, Forward } from "./commands";
import { InvalidArgumentsException } from "./invalid-arguments.exception";

describe('Commands', () => {
  describe('Center', () => {
    it('should create a command', () => {
      const command = new Center();

      expect(command.type).toBe(CommandType.center);
    });
  });

  describe('Forward', () => {
    it('should create a command', () => {
      const command = new Forward([1]);

      expect(command.type).toBe(CommandType.forward);
      expect(command.payload).toEqual([1]);
    });

    it('should throw InvalidArgumentsException', () => {
      try {
        new Forward([]);
      } catch (e) {
        expect(e).toEqual(new InvalidArgumentsException());
      }
    });
  });

  // etc...
});
