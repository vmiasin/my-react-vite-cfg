import { useState } from 'react';
import { Button, Space, Typography } from 'antd';
import { presetPalettes } from '@ant-design/colors';

function App() {
  const [count, setCount] = useState(0);
  const { Title } = Typography;

  return (
    <Space
      direction="vertical"
      size="large"
      style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}
    >
      <Title style={{ color: presetPalettes.cyan[8] }}>Vite + React + TS + SCSS + Ant + ESLint + Prettier</Title>
      <Button size="large" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </Space>
  );
}

export default App;
