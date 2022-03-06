import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <h1>This is the app</h1>
      <Navbar />
    </Router>
  );
}

export default App;
