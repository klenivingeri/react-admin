
import Routes from './routes';
import { Header } from './components/header';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/footer';
import { AsideBox } from './components/AsideBox';

import { GoalContext } from './contexts'

const App = () => {

  return (

    <BrowserRouter>
      <Header />
      <div id="escopo">
        <Routes />
      </div>
      <AsideBox />
      <Footer />
    </BrowserRouter>

  );
}

export default App;
