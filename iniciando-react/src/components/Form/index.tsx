import { FormEvent, useRef } from 'react';

import './style.css';

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
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="name">
        Nome:
        <input
          className="form-input"
          type="text"
          id="name"
          ref={inputNameRef}
        />
      </label>

      <label className="form-label" htmlFor="email">
        Email:
        <input
          className="form-input"
          type="email"
          name="email"
          id="email"
          ref={inputEmailRef}
        />
      </label>

      <button className="form-btn" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Form;
