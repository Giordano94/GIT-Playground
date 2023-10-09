import { FC } from 'react';

const Form: FC = () => {
  return (
    <div>
      <h1>Form</h1>
      <input type="text">Name</input>
      <input type="text">CPF</input>
      <input type="text">Endereço</input>
      <input type="text">Data de nascimento</input>
      <input type="text">Estado civil </input>
      <input type="text">Renda</input>
    </div>
  );
};

export default Form;
