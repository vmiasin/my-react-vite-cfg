import { useState } from 'react';
import { Center, Flex, Button, Title } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

function App() {
  const [count, setCount] = useState(0);
  const { height } = useViewportSize();

  return (
    <Center h={height}>
      <Flex mih={height} gap="md" justify="center" align="center" direction="column" wrap="wrap">
        <Title order={1} color="cyan.9">
          Vite + React + TS + SCSS + Mantine + ESLint + Prettier
        </Title>
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
        >
          count is {count}
        </Button>
      </Flex>
    </Center>
  );
}

export default App;
