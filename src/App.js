
import Routes from './routes'
import { Header } from './components/header'
import { BrowserRouter, } from 'react-router-dom'
import { Footer } from './components/footer'

function App() {
  return ( 

    <BrowserRouter>
        <Header />
        <div id="escopo">
        <Routes />
        </div>
        <Footer />
    </BrowserRouter>

  );
}

export default App;
