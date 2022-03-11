import { render, screen } from '@testing-library/react';
import App from '../App';
import ColorSelection from '../components/colorSelection.tsx';
import PowerSelection from '../components/powerSelection.tsx';
import PackageSelection from '../components/optionPackageSelection.tsx';
import WarpDriveSelection from '../components/warpDriveSelection.tsx';
import Dashboard from '../components/dashboard.tsx';

test('Renders spaceship title', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/Spaceship configurator/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders color selection', () => {
  render(<ColorSelection />);
  const snowColor = screen.getByText(/Snow/i);
  expect(snowColor).toBeInTheDocument();
})

test('Renders power selection', () => {
  render(<PowerSelection />);
  const power150mw = screen.getByText(/150 MW/i);
  expect(power150mw).toBeInTheDocument();
})

test('Renders warp drive selection', () => {
  render(<WarpDriveSelection />);
  const yesAnswer = screen.getByText(/Yes/i);
  expect(yesAnswer).toBeInTheDocument();
})

test('Renders package selection', () => {
  render(<PackageSelection />);
  const sportPackage = screen.getByText(/Sport/i);
  expect(sportPackage).toBeInTheDocument();
})


