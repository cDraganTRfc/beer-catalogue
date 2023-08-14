//components
import Home from './pages/Home';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';

// other
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// styles
import './styles/index.scss'
import BeerCard from './pages/BeerCard';

const queryClient = new QueryClient()

const App = () => {
  return ( <main className='app-container'>
    <QueryClientProvider client={queryClient}>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path= '/beer/:name' element={<BeerCard />}/> 
        <Route path= "*" element={<NotFound />} />
      </Routes>
    </Router>
    </QueryClientProvider>
  </main> );
}
 
export default App;
