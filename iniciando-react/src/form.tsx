import { FormEvent, useRef } from 'react';

const Form = (): JSX.Element => {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(
      `Nome: ${inputNameRef.current?.value} / Email: ${inputEmailRef.current?.value}`,
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Nome completo: <input type="text" id="name" ref={inputNameRef} />
      </label>

      <label htmlFor="email">
        Email:
        <input type="email" name="email" id="email" ref={inputEmailRef} />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
