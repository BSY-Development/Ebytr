import React from 'react';
import { render, screen } from '@testing-library/react'
import App from '../App';

describe('Realiza os testes da pagina de Login', () => {
  it('Verifica se todos os campos existem', () => {
    render(<App />);

    const header = screen.getByRole('heading', { name: /ebytr/i });
    expect(header).toBeInTheDocument();

    const footer = screen.getByRole('heading', { name: /bruno yamamoto/i });
    expect(footer).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /add/i });
    expect(button).toBeInTheDocument();

    const load = screen.getByRole('heading', { name: /loading\.\.\./i });
    expect(load).toBeInTheDocument();

    const copyr = screen.getByText(/© copyright 2022/i);
    expect(copyr).toBeInTheDocument();

    const createNew = screen.getByRole('heading', { name: /create new/i });
    expect(createNew).toBeInTheDocument();
  });
});
