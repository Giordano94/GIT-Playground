import { FC } from 'react';
import { TextField } from '@mui/material';

const Form: FC = () => {
  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sed eos
        dolorem quasi similique a repudiandae, quas pariatur quae laborum non
        nesciunt, error vero praesentium alias doloribus? Eius, tempora
        reprehenderit?
      </div>
      <h1>Formulário de Contato (branch main)</h1>

      <TextField label="Email" />
      {/* Esta é uma adição na branch main */}
      <TextField label="CPF" />
      <TextField label="Address" />
      <TextField label="Birth date" />
      <TextField label="Marital Status" />
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        dolor officia iusto nisi voluptate ea quas asperiores, eius aliquam.
        Cumque et veniam, dignissimos animi quod nihil commodi molestias
        incidunt vero.
      </div>
    </div>
  );
};

export default Form;
