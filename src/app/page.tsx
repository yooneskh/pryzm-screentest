import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Box, Divider, StackDivider, UnorderedList, ListItem } from '@chakra-ui/react'
import { ScreentestForm } from './components/ScreentestForm';


export default function Home() {
  return (
    <main>
      <Box p={6} bgColor="gray.50" minH="100vh" display={[ "block", "flex" ]} alignItems="center" justifyContent="center">
        <Card minW={[ null, 400, 512 ]}>

          <CardHeader textAlign="center">
            <Heading size={"lg"}>
              Form Screentest
            </Heading>
          </CardHeader>

          <Divider color={"gray.300"} />

          <CardBody>
            <ScreentestForm

            />
          </CardBody>

          <Divider color={"gray.300"} />

          <CardBody>

            <Text>
              Entered values are:
            </Text>

            <UnorderedList mt={2}>
              <ListItem>
                Denominator:
                BTC
              </ListItem>
              <ListItem>
                Value:
                2,000
              </ListItem>
            </UnorderedList>

          </CardBody>

        </Card>
      </Box>
    </main>
  );
}
