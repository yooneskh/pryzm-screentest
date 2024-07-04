'use client'

import { ChakraProvider } from '@chakra-ui/react';
import { createContext, useState } from 'react';


export const FormDenomContext = createContext<any>({});
export const FormValueContext = createContext<any>({});


export function Providers({ children }: { children: React.ReactNode }) {

  const [denominator, setDenominator] = useState('');
  const [value, setValue] = useState('');

  return (
    <ChakraProvider>
      <FormDenomContext.Provider value={{ denominator, setDenominator }}>
        <FormValueContext.Provider value={{ value, setValue }}>
          {children}
        </FormValueContext.Provider>
      </FormDenomContext.Provider>
    </ChakraProvider>
  );

}
