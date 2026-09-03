import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useDebouncedValue } from './useDebouncedValue';

describe('useDebouncedValue', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns the initial value immediately', () => {
    const { result } = renderHook(() => useDebouncedValue('first', 200));
    expect(result.current).toBe('first');
  });

  it('does not update before the delay has elapsed', () => {
    const { result, rerender } = renderHook(({ value }) => useDebouncedValue(value, 200), {
      initialProps: { value: 'first' },
    });

    rerender({ value: 'second' });
    vi.advanceTimersByTime(100);

    expect(result.current).toBe('first');
  });

  it('updates once the delay has fully elapsed', () => {
    const { result, rerender } = renderHook(({ value }) => useDebouncedValue(value, 200), {
      initialProps: { value: 'first' },
    });

    rerender({ value: 'second' });
    vi.advanceTimersByTime(200);

    expect(result.current).toBe('second');
  });
});
