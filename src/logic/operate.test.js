import operate from './operate';

describe('operate function', () => {
  it('should perform addition', () => {
    const result = operate('10', '5', '+');
    expect(result).toBe('15');
  });

  it('should perform subtraction', () => {
    const result = operate('10', '5', '-');
    expect(result).toBe('5');
  });

  it('should perform multiplication', () => {
    const result = operate('10', '5', 'x');
    expect(result).toBe('50');
  });

  it('should perform division', () => {
    const result = operate('10', '5', '÷');
    expect(result).toBe('2');
  });

  it('should handle division by zero', () => {
    const result = operate('10', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should perform modulo', () => {
    const result = operate('10', '3', '%');
    expect(result).toBe('1');
  });

  it('should handle modulo with zero', () => {
    const result = operate('10', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw error for unknown operation', () => {
    expect(() => operate('10', '5', '#')).toThrowError("Unknown operation '#'");
  });
});
