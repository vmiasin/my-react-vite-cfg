import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { cyan } from '@mui/material/colors';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}
    >
      <Typography
        component="h1"
        variant="h3"
        gutterBottom
        color={cyan[900]}
        sx={{ fontWeight: 'bold' }}
        textAlign="center"
      >
        Vite + React + TS + SCSS + MUI + ESLint + Prettier
      </Typography>
      <Button variant="outlined" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </Box>
  );
}

export default App;
