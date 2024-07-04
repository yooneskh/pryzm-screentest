import { Card, CardHeader, CardBody, Heading, Box, Divider } from '@chakra-ui/react'
import { ScreentestForm } from './components/ScreentestForm';
import { ScreentestShowData } from './components/ScreentestShowData';


export default function Home() {

  return (
    <main>
      <Box p={6} bgColor="gray.50" minH="100vh" display={[ "block", "flex" ]} alignItems="center" justifyContent="center">
        <Card minW={[ null, 400, 512 ]}>

          <CardHeader textAlign="center">
            <Heading size={"md"}>
              Form Screentest
            </Heading>
          </CardHeader>

          <Divider color={"gray.300"} />

          <CardBody>
            <ScreentestForm />
          </CardBody>

          <Divider color={"gray.300"} />

          <CardBody>
            <ScreentestShowData />
          </CardBody>

        </Card>
      </Box>
    </main>
  );
}
