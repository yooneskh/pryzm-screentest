'use client';

import { UnorderedList, ListItem, Text } from '@chakra-ui/react';
import { FormDenomContext, FormValueContext } from '../providers';
import { useContext } from 'react';


export function ScreentestShowData() {
  
  const { denominator } = useContext(FormDenomContext);
  const { value } = useContext(FormValueContext);

  return (
    <div>

      <Text>
        Entered values are:
      </Text>

      <UnorderedList mt={2}>
        <ListItem>
          Denominator
          <br />
          <Text as={'span'} fontWeight={'bold'} mt={1}>
            { denominator }
          </Text>
        </ListItem>
        <ListItem mt={2}>
          Value
          <br />
          <Text as={'span'} fontWeight={'bold'} mt={1}>
            { Number(value)?.toLocaleString?.() ?? '' }
          </Text>
        </ListItem>
      </UnorderedList>

    </div>
  );

}
