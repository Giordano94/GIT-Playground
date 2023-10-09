import { TextField } from '@mui/material';
import { FC } from 'react';

const ComponenteA: FC = () => {
  return (
    <div>
      <h1>Componente A (branch feature/A)</h1>
      <TextField label="A" />
      <TextField label="A" />
      <TextField label="A" />
      <TextField label="A" />
    </div>
  );
};

export default ComponenteA;
