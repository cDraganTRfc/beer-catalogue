//components
import Home from './pages/Home';
import NavBar from './components/NavBar';

// other
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// styles
import './styles/index.scss'

const queryClient = new QueryClient()

const App = () => {
  return ( <main className='app-container'>
    <QueryClientProvider client={queryClient}>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
    </QueryClientProvider>
  </main> );
}
 
export default App;
