import { act, fireEvent, render, renderHook, screen } from "@testing-library/react";
import {useForm} from '../../src/hooks';
import { FormWithCustomHook } from "../../src/02-useEffect/FormWithCustomHook";

describe('Pruebas de hook useForm', () => {
    const initialForm = {
        name: 'Karen',
        email: 'jahir1234@gmail.com'
    }
    test('Debe de regresar la informacion por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const {formState} = result.current
        
        expect(result.current.formState).toStrictEqual(initialForm);
    });
    test('debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan'
        //montar el hook
        const { result } = renderHook(() => useForm(initialForm));

        const {formState, onInputChange} = result.current

        act(() => {
            onInputChange({target: {value: 'Juan', name: 'name'}})
        })

        expect(result.current.name).toBe(newValue);


        //expect, result.current.name===Juan
        //expect, result.current.formState.name===Juan
    })
    test('debe de realizar el reset del formulario', () => {
        const newValue = 'Juan'
        //montar el hook
        const { result } = renderHook(() => useForm(initialForm));

        const {formState, onInputChange, onResetForm} = result.current

        act(() => {
            onInputChange({target: {value: 'Juan', name: 'name'}}),
            onResetForm();
        })

        expect(result.current.name).toBe('Karen');


        //expect, result.current.name===Juan
        //expect, result.current.formState.name===Juan
    })
});