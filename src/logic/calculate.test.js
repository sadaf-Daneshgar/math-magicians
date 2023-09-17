import calculate from './calculate';

describe('calculate function', () => {
  it('should match the snapshot for AC button', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toMatchSnapshot();
  });

  it('should match the snapshot for number buttons', () => {
    const result1 = calculate({ total: '10', next: '5', operation: '+' }, '2');
    const result2 = calculate({ total: '10', next: null, operation: null }, '0');

    expect(result1).toMatchSnapshot();
    expect(result2).toMatchSnapshot();
  });
});
