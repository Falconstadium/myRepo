import Header from './components/Header';
import Hero from './components/Hero';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Hero />
    </GlobalProvider>
  );
}

export default App;
