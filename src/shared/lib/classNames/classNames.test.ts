import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with first param', () => {
    const expected = 'first_param';
    expect(classNames('first_param')).toBe(expected)
  });

  test('with additional classes', () => {
    const expected = 'first_param additional_param_1 additional_param_2';
    expect(classNames('first_param',
      {},
      ['additional_param_1', 'additional_param_2']))
      .toBe(expected)
  });

  test('with mods', () => {
    const expected = 'first_param additional_param_1 additional_param_2 draggable active';
    expect(classNames('first_param',
      { draggable: true, active: true },
      ['additional_param_1', 'additional_param_2']))
      .toBe(expected)
  });

  test('with mode false', () => {
    const expected = 'first_param additional_param_1 additional_param_2 draggable';
    expect(classNames('first_param',
      { draggable: true, active: false },
      ['additional_param_1', 'additional_param_2']))
      .toBe(expected)
  });

  test('with mode undefined', () => {
    const expected = 'first_param additional_param_1 additional_param_2 active';
    expect(classNames('first_param',
      { draggable: undefined, active: true },
      ['additional_param_1', 'additional_param_2']))
      .toBe(expected)
  });
})