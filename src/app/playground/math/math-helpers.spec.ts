import { cos, sin } from "./math-helpers";

describe('math helpers', () => {
  describe('sin', () => {
    it('should return proper value for 0 degrees', () => {
      const angle = 0;
      const expected = 0;

      const result = sin(angle);

      expect(result).toBe(expected);
    });

    it('should return proper value for 45 degrees', () => {
      const angle = 45;
      const expected = 0.70711;

      const result = sin(angle);

      expect(result).toBe(expected);
    });


    it('should return proper value for 90 degrees', () => {
      const angle = 90;
      const expected = 1;

      const result = sin(angle);

      expect(result).toBe(expected);
    });
  });

  describe('cos', () => {
    it('should return proper value for 0 degrees', () => {
      const angle = 0;
      const expected = 1;

      const result = cos(angle);

      expect(result).toBe(expected);
    });

    it('should return proper value for 45 degrees', () => {
      const angle = 45;
      const expected = 0.70711;

      const result = cos(angle);

      expect(result).toBe(expected);
    });


    it('should return proper value for 90 degrees', () => {
      const angle = 90;
      const expected = 0;

      const result = cos(angle);

      expect(result).toBe(expected);
    });
  });
});
