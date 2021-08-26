import { render } from '@testing-library/react';
import App from './App';

describe('Test App', () => {
  it('Deve renderizar sem erros', () => {
    const { getByText } = render(<App />);

    expect.assertions(1);
    expect(getByText('Teste')).toBeTruthy();
  });
});
