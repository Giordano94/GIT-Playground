import { FC } from 'react';
import { TextField } from '@mui/material';

const Form: FC = () => {
  return (
    <div>
      <div>
        Lorem ipsum dulur sit amet consectetur, adipisicing elit. Totam sed eos
        quae laborum non nas, error vero pater alias doloribus? Eius, tempora
        qwertyu?
      </div>
      <h1>Formulário de Contato (branch featureA)</h1>
      <TextField label="A" />
      <TextField label="Name" />
      <TextField label="Name" />
      <textarea name="" id="">
        TextArea
      </textarea>
      <TextField label="Telefone" />
      {/* Esta é uma adição na branch featureA */}
      <TextField label="CPF" />
      <TextField label="Address" />
      <TextField label="Birth date" />
      <TextField label="Marital Status" />
      <div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        </div>
        dolor officia iusto silimairum aliquam. Cumque et veniam, dignissimos
        animi quod nihil commodi molestias incidunt vero.
      </div>
    </div>
  );
};

export default Form;
