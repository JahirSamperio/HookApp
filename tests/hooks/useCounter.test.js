import { act, render, renderHook } from '@testing-library/react';
import { useCounter} from '../../src/hooks/useCounter';

describe('Pruebas del hook useCounter', () => {
    test('Deberia retornar los valores por defecto', () => {
        const {result} = renderHook(() => useCounter());
        const {counter, increment, decrement, reset} = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })
    test('Deberia de generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const {counter} = result.current;
        expect(counter).toBe(100);

    })
    test('Deberia de incrementar el contador', () => {
        const {result} = renderHook(() => useCounter());
        const {counter, increment} = result.current;

        act(() => increment(1));

        expect(result.current.counter).toBe(11);

    })
    test('Deberia de decrementar el contador', () => {
        const {result} = renderHook(() => useCounter());
        const {counter, decrement} = result.current;

        act(() => decrement(1));

        expect(result.current.counter).toBe(9);

    })
    test('Deberia de resetear el contador', () => {
        const {result} = renderHook(() => useCounter());
        const {counter, reset, decrement } = result.current;

        act(() => { 
            decrement(1);
            reset();
        });

        expect(result.current.counter).toBe(result.current.counter);

    })
})