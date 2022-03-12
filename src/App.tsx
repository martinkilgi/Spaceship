import './App.scss';
import Dashboard from './components/dashboard';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
