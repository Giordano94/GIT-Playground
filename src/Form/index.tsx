import { FC } from 'react';
import { TextField } from '@mui/material';

const Form: FC = () => {
  return (
    <div>
      <h1>Form</h1>
      <TextField label="Name" />
      <TextField label="CPF" />
      <TextField label="Address" />
      <TextField label="Birth date" />
      <TextField label="Marital Status" />
    </div>
  );
};

export default Form;
