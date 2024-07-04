'use client';

import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormLabel, FormControl, Input, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Select } from '@chakra-ui/react';
import { FormDenomContext, FormValueContext } from '../providers';
import { useContext } from 'react';


export function ScreentestForm() {
  
  const { denominator, setDenominator } = useContext(FormDenomContext);
  const { value, setValue } = useContext(FormValueContext);


  const { register, formState: { errors } } = useForm({
    mode: 'all',
    defaultValues: {
      denominator,
      value,
    },
  });


  const denominations = [
    'ATOM',
    'OSMO',
    'ETC.',
  ];


  return (
    <form>

      <FormControl isInvalid={!!errors.denominator}>

        <FormLabel htmlFor='denominator'>
          Denominator
        </FormLabel>

        <Select
          id="denominator"
          value={denominator}
          placeholder="Select an option"
          {...register('denominator', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
            onChange: e => setDenominator(e.target.value),
          })}>
            {denominations.map(it => (
              <option key={it} value={it}>{ it }</option>
            ))}
        </Select>

        {!errors.denominator ? null : (
          <FormErrorMessage>
            {String(errors.denominator.message)}
          </FormErrorMessage>
        )}

      </FormControl>

      <FormControl isInvalid={!!errors.value} mt={6}>

        <FormLabel htmlFor='value'>
          Value
        </FormLabel>

        <NumberInput
          id='value'
          min={1}
          onChange={(_, num) => setValue(num)}>
          <NumberInputField
            {...register('value', {
              required: 'This is required',
              min: { value: 1, message: 'Value must be higher than or equal to 1' },
            })}
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        {!errors.value ? null : (
          <FormErrorMessage>
            {String(errors.value.message)}
          </FormErrorMessage>
        )}

      </FormControl>

    </form>
  );

}
