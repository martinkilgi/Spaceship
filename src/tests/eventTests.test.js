import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.tsx';

test('Select color and display correct price', () => {
    render(<App />);
    userEvent.click(screen.getByText('Volcano'));
    expect(screen.getByTestId('colorPrice')).toHaveTextContent('+100€');
})

test('Select power and display correct price', () => {
    render(<App />);
    userEvent.click(screen.getByTestId('power150mw'));
    expect(screen.getByTestId('powerPrice')).toHaveTextContent('+200€');
})

test('Select warp drive and display correct price', () => {
    render(<App />);
    userEvent.click(screen.getByTestId('warpdriveyes'));
    expect(screen.getByTestId('warpDrivePrice')).toHaveTextContent('+1000€');
})

test('Select option package and display correct price', () => {
    render(<App />);
    userEvent.click(screen.getByTestId('packagelux'));
    expect(screen.getByTestId('packagePrice')).toHaveTextContent('+500€');
})

test('Sum total price with correct values', () => {
    render(<App />);
    userEvent.click(screen.getByTestId('skycolor'));
    userEvent.click(screen.getByTestId('power200mw'));
    userEvent.click(screen.getByTestId('warpdriveno'));
    userEvent.click(screen.getByTestId('packagesport'));
    expect(screen.getByTestId('totalPrice')).toHaveTextContent('+1700€');
})

